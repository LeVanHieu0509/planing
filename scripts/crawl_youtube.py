#!/usr/bin/env python3
"""
YouTube Transcript & Metadata Crawler
Helper tool for YouTube Knowledge Extractor Agent
Usage:
    python3 scripts/crawl_youtube.py "<YOUTUBE_URL_OR_ID>" [--json] [--out <output_path>]
"""

import sys
import re
import json
import urllib.request
import subprocess

def extract_video_id(url_or_id: str):
    if len(url_or_id) == 11 and re.match(r'^[A-Za-z0-9_-]{11}$', url_or_id):
        return url_or_id, None
    
    # Extract timestamp if present
    t_match = re.search(r'[?&]t=(\d+)s?', url_or_id)
    timestamp = int(t_match.group(1)) if t_match else None
    
    # Extract ID
    patterns = [
        r'(?:v=|\/v\/|youtu\.be\/|\/embed\/|\/live\/|\/shorts\/)([A-Za-z0-9_-]{11})',
        r'([A-Za-z0-9_-]{11})'
    ]
    for p in patterns:
        m = re.search(p, url_or_id)
        if m:
            return m.group(1), timestamp
    return None, timestamp

def fetch_metadata(video_id: str):
    url = f"https://www.youtube.com/watch?v={video_id}"
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
    })
    try:
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        
        # Title
        t_match = re.search(r'<title>(.*?)</title>', html)
        title = t_match.group(1).replace(' - YouTube', '').strip() if t_match else 'Unknown Title'
        
        # Channel
        c_match = re.search(r'\"ownerChannelName\":\"([^\"]+)\"', html)
        if not c_match:
            c_match = re.search(r'\"author\":\"([^\"]+)\"', html)
        channel = c_match.group(1) if c_match else 'Unknown Channel'
        
        # Duration in seconds
        d_match = re.search(r'\"approxDurationMs\":\"([^\"]+)\"', html)
        duration_s = int(d_match.group(1)) // 1000 if d_match else 0
        
        return {
            "title": title,
            "channel": channel,
            "duration_seconds": duration_s,
            "duration_formatted": f"{duration_s // 60}:{duration_s % 60:02d}"
        }
    except Exception as e:
        return {
            "title": "Unknown Title",
            "channel": "Unknown Channel",
            "duration_seconds": 0,
            "duration_formatted": "00:00",
            "error": str(e)
        }

def fetch_transcript_mcp(video_id: str):
    """Fetch transcript via @sinco-lab/mcp-youtube-transcript via JSON-RPC stdio."""
    try:
        proc = subprocess.Popen(
            ['npx', '-y', '@sinco-lab/mcp-youtube-transcript'],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        # Initialize
        init_req = {
            'jsonrpc': '2.0',
            'id': 1,
            'method': 'initialize',
            'params': {
                'protocolVersion': '2024-11-05',
                'capabilities': {},
                'clientInfo': {'name': 'cli-crawler', 'version': '1.0'}
            }
        }
        proc.stdin.write(json.dumps(init_req) + '\n')
        proc.stdin.flush()
        proc.stdout.readline()

        # Call get_timed_transcript
        call_req = {
            'jsonrpc': '2.0',
            'id': 2,
            'method': 'tools/call',
            'params': {
                'name': 'get_timed_transcript',
                'arguments': {
                    'url': f"https://www.youtube.com/watch?v={video_id}"
                }
            }
        }
        proc.stdin.write(json.dumps(call_req) + '\n')
        proc.stdin.flush()
        resp_line = proc.stdout.readline()
        proc.terminate()

        resp = json.loads(resp_line)
        if 'result' in resp and 'content' in resp['result']:
            text = resp['result']['content'][0]['text']
            return text
    except Exception as e:
        pass
    return None

def fetch_transcript_python_api(video_id: str):
    """Fallback fetch via python youtube_transcript_api package."""
    try:
        from youtube_transcript_api import YouTubeTranscriptApi
        api = YouTubeTranscriptApi()
        transcript_list = api.list(video_id)
        # Try vi, then en, or first available
        try:
            t = transcript_list.find_transcript(['vi', 'en'])
        except Exception:
            t = next(iter(transcript_list))
        data = t.fetch()
        lines = []
        for item in data:
            start = getattr(item, 'start', 0.0)
            text = getattr(item, 'text', '')
            mins = int(start // 60)
            secs = int(start % 60)
            lines.append(f"[{mins:02d}:{secs:02d}] {text}")
        return '\n'.join(lines)
    except Exception as e:
        return None

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/crawl_youtube.py <YOUTUBE_URL_OR_ID> [--json] [--out <output_path>]")
        sys.exit(1)
        
    url_input = sys.argv[1]
    video_id, timestamp = extract_video_id(url_input)
    
    if not video_id:
        print(f"Error: Could not extract video ID from {url_input}", file=sys.stderr)
        sys.exit(1)
        
    meta = fetch_metadata(video_id)
    meta["video_id"] = video_id
    meta["url"] = f"https://www.youtube.com/watch?v={video_id}"
    if timestamp:
        meta["timestamp"] = timestamp
        meta["timestamp_formatted"] = f"{timestamp // 60}:{timestamp % 60:02d}"
        
    # Get transcript
    transcript_text = fetch_transcript_mcp(video_id)
    if not transcript_text:
        transcript_text = fetch_transcript_python_api(video_id)
        
    meta["transcript_available"] = bool(transcript_text)
    meta["transcript_length"] = len(transcript_text) if transcript_text else 0
    
    output_path = None
    if "--out" in sys.argv:
        out_idx = sys.argv.index("--out")
        if out_idx + 1 < len(sys.argv):
            output_path = sys.argv[out_idx + 1]
            
    if output_path and transcript_text:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(transcript_text)
        meta["saved_to"] = output_path
        
    if "--json" in sys.argv:
        meta["transcript"] = transcript_text
        print(json.dumps(meta, ensure_ascii=False, indent=2))
    else:
        print(f"🎬 Title: {meta['title']}")
        print(f"📺 Channel: {meta['channel']}")
        print(f"⏳ Duration: {meta['duration_formatted']} ({meta['duration_seconds']}s)")
        print(f"🔗 Video ID: {video_id}")
        if timestamp:
            print(f"⏱️ Highlight Timestamp: {meta.get('timestamp_formatted')} ({timestamp}s)")
        print(f"📝 Transcript: {'Success (' + str(meta['transcript_length']) + ' chars)' if transcript_text else 'Failed'}")
        if output_path:
            print(f"💾 Saved transcript to: {output_path}")

if __name__ == "__main__":
    main()
