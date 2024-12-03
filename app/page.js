'use client';

import React from 'react';

const Page = () => {
  const videoUrls = [
    'https://vimeo.com/1030831285',
    'https://vimeo.com/1033941870',
    'https://vimeo.com/1030020459',
    'https://vimeo.com/946171968',
  ];

  const handleButtonClick = (index) => {
    // Connect to the WebSocket server (on the same server or localhost for local dev)
    const wsUrl = process.env.NODE_ENV === 'production' 
      ? 'wss://stream1tablet.vercel.app/api/websocket/route.js' 
      : 'ws://localhost:8080'; // Use ws:// for local development

    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('WebSocket connection established in Project One.');
      // Send the selected video URL to the other project (Project Two)
      ws.send(JSON.stringify({ videoSrc: videoUrls[index] }));
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed in Project One.');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error in Project One:', error);
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Buttons Page</h1>
      <div className="grid grid-cols-2 gap-4">
        {videoUrls.map((url, index) => (
          <button
            key={index}
            className="px-6 py-3 bg-blue-500 text-white rounded text-lg hover:bg-blue-600 transition"
            onClick={() => handleButtonClick(index)}
          >
            Button {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;
