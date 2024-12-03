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
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('WebSocket connection established in Project One.');
      // Send video URL to Project Two via WebSocket
      ws.send(JSON.stringify({ videoSrc: videoUrls[index] }));
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed in Project One.');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error in Project One:', error);
    };
  };

  // Fullscreen handler
  const handleFullScreen = () => {
    const element = document.documentElement;
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
      {/* Fullscreen Button */}
      <button
        onClick={handleFullScreen}
        className="mt-8 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
      >
        Enter Full Screen
      </button>
    </div>
  );
};

export default Page;
