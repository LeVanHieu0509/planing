from mcp.server.mcpserver import MCPServer
import requests
from bs4 import BeautifulSoup
import json
import urllib.parse

# Initialize MCPServer server
mcp = MCPServer("content-extractor")

@mcp.tool()
def extract_url_content(url: str) -> str:
    """
    Extracts text content and metadata from a given URL.
    Specifically handles YouTube links (using oEmbed API) and falls back to a 
    general web scraper (BeautifulSoup) for blogs, articles, and other websites.
    Note: Highly dynamic sites like Facebook or SPA applications might return limited data.
    """
    # 1. Handle YouTube URLs specially (to avoid bot detection and JS rendering issues)
    if "youtube.com" in url or "youtu.be" in url:
        try:
            # 1a. Get metadata via oEmbed
            encoded_url = urllib.parse.quote(url)
            oembed_url = f"https://www.youtube.com/oembed?url={encoded_url}&format=json"
            resp = requests.get(oembed_url, timeout=10)
            
            title = 'Unknown Title'
            author = 'Unknown Author'
            if resp.status_code == 200:
                data = resp.json()
                title = data.get('title', 'Unknown Title')
                author = data.get('author_name', 'Unknown Author')
            
            # 1b. Get Transcript
            from youtube_transcript_api import YouTubeTranscriptApi
            import re
            
            # Extract 11-character video ID
            video_id_match = re.search(r"(?:v=|\/)([0-9A-Za-z_-]{11}).*", url)
            transcript_text = "No transcript available."
            
            if video_id_match:
                video_id = video_id_match.group(1)
                try:
                    # Fetch transcript (prioritize Vietnamese, then English)
                    api = YouTubeTranscriptApi()
                    transcript_list = api.fetch(video_id, languages=['vi', 'en'])
                    transcript_text = " ".join([t.text for t in transcript_list])
                    
                    # Truncate if too long
                    if len(transcript_text) > 15000:
                        transcript_text = transcript_text[:15000] + "\n...[Transcript Truncated]"
                except Exception as e:
                    transcript_text = f"[Could not fetch transcript: {str(e)}]"
                    
            # 1c. Get Top Comments
            comments_text = "No comments fetched."
            if video_id_match:
                try:
                    from youtube_comment_downloader import YoutubeCommentDownloader, SORT_BY_POPULAR
                    import itertools
                    
                    downloader = YoutubeCommentDownloader()
                    comments = downloader.get_comments_from_url(url, sort_by=SORT_BY_POPULAR)
                    
                    comment_list = []
                    for idx, comment in enumerate(itertools.islice(comments, 50)):
                        clean_c = comment['text'].replace('\n', ' ')
                        comment_list.append(f"{idx+1}. {clean_c}")
                        
                    if comment_list:
                        comments_text = "\n".join(comment_list)
                except Exception as e:
                    comments_text = f"[Could not fetch comments: {str(e)}]"

            return f"[YouTube Video]\nTitle: {title}\nChannel: {author}\nURL: {url}\n\n--- Transcript (Nội dung) ---\n{transcript_text}\n\n--- Top 50 Comments (Bình luận nổi bật) ---\n{comments_text}"
            
        except Exception as e:
            return f"Error extracting YouTube metadata/transcript: {str(e)}"
            
    # 2. General Web Scraper for Blogs, News, and standard web pages
    try:
        # Pretend to be a standard browser
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8'
        }
        resp = requests.get(url, headers=headers, timeout=15)
        resp.raise_for_status()
        
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        # Extract title
        title = soup.title.string.strip() if soup.title else 'No Title Found'
        
        # Remove script and style elements for clean text extraction
        for script in soup(["script", "style", "noscript", "header", "footer", "nav"]):
            script.extract()
            
        # Extract and clean text
        text = soup.get_text(separator='\n')
        lines = (line.strip() for line in text.splitlines())
        chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
        clean_text = '\n'.join(chunk for chunk in chunks if chunk)
        
        # Truncate content if it's too long to avoid token limits
        max_chars = 15000
        if len(clean_text) > max_chars:
            clean_text = clean_text[:max_chars] + "\n...[Content Truncated due to length]"
            
        return f"[Web Page]\nTitle: {title}\nURL: {url}\n\n--- Content ---\n{clean_text}"
        
    except requests.exceptions.RequestException as e:
        return f"Network Error extracting content from {url}: {str(e)}"
    except Exception as e:
        return f"Unexpected Error extracting content from {url}: {str(e)}"

if __name__ == "__main__":
    # Start the FastMCP server over standard input/output
    mcp.run()
