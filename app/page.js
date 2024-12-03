'use client';

import React from 'react';

const Page = () => {
  const videoUrls = [
    'https://www.youtube.com/watch?v=hy-Rqr6lwvE',
    'https://www.youtube.com/watch?v=3EeSgpwl6po',
    'https://www.youtube.com/watch?v=p4BsBw1RyHs',
    'https://www.youtube.com/watch?v=YAMDYu3mk3k',
  ];

  const handleButtonClick = (index) => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('WebSocket connection established in Project One.');
    };

    ws.onmessage = (event) => {
      console.log('Received message from WebSocket:', event.data);
    };

    // Send video URL to Project Two via WebSocket
    ws.onopen = () => {
      ws.send(JSON.stringify({ videoSrc: videoUrls[index] }));
    };
  };

  // Function to trigger fullscreen mode
  const handleFullScreen = () => {
    const element = document.documentElement; // This selects the <html> element

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
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
      <button
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded text-lg hover:bg-green-600 transition"
        onClick={handleFullScreen}
      >
        Full Screen
      </button>
    </div>
  );
};

export default Page;
