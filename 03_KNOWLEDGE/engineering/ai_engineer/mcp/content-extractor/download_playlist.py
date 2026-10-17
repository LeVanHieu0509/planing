import sys
import os
import yt_dlp
import re

sys.path.append(os.getcwd())
import server

PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PL1bLXQ3Ow2laohoh3upL-dv3gNwTxGpmQ'
OUTPUT_DIR = '/Users/hieulevan/Workspace/planing/me/lifestyle/lythuyet'

def sanitize_filename(name):
    if not name:
        return "Unknown_Video"
    # Remove invalid characters for macOS filenames (like colon, slash)
    return re.sub(r'[/\\:]', '-', name).strip()

def main():
    ydl_opts = {
        'extract_flat': True,
        'quiet': True
    }
    
    print("Fetching playlist info...")
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(PLAYLIST_URL, download=False)
        if 'entries' in info:
            entries = info['entries']
        else:
            print("No entries found.")
            return

    total = len(entries)
    print(f"Found {total} videos in the playlist.")
    
    for idx, entry in enumerate(entries, 1):
        url = entry.get('url')
        if not url:
            continue
        
        # Ensure it's a full URL
        if not url.startswith('http'):
            url = f"https://www.youtube.com/watch?v={url}"
            
        title = entry.get('title', f'Video_{idx}')
        safe_title = sanitize_filename(title)
        file_path = os.path.join(OUTPUT_DIR, f"{safe_title}.md")
        
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            if "[Could not fetch transcript:" in content:
                print(f"[{idx}/{total}] File '{title}' has transcript error, re-downloading...")
            else:
                print(f"[{idx}/{total}] Skipping '{title}', file already exists and is valid.")
                continue
            
        print(f"[{idx}/{total}] Extracting: {title}...")
        try:
            content = server.extract_url_content(url)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
        except Exception as e:
            print(f"Error extracting {url}: {e}")

if __name__ == "__main__":
    main()
