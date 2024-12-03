// /app/api/video/route.js

const videoLinks = {
    1: 'https://example.com/video1.mp4',
    2: 'https://example.com/video2.mp4',
    3: 'https://example.com/video3.mp4',
    4: 'https://example.com/video4.mp4',
  };
  
  export async function POST(req) {
    const body = await req.json();
    const { buttonId, videoSrc } = body;
  
    if (!buttonId || !videoSrc) {
      return new Response(JSON.stringify({ message: 'Invalid data' }), {
        status: 400,
      });
    }
  
    videoLinks[buttonId] = videoSrc;
  
    return new Response(JSON.stringify({ message: 'Video link saved successfully' }), {
      status: 200,
    });
  }
  
  export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const buttonId = searchParams.get('buttonId');
  
    if (!buttonId || !videoLinks[buttonId]) {
      return new Response(JSON.stringify({ message: 'Video link not found' }), {
        status: 404,
      });
    }
  
    return new Response(JSON.stringify({ videoSrc: videoLinks[buttonId] }), {
      status: 200,
    });
  }
  