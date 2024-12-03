'use client';

import React from 'react';

const Page = () => {
  const videoUrls = [
    'https://vimeo.com/1030831285',
    'https://vimeo.com/1033941870',
    'https://vimeo.com/1030020459',
    'https://vimeo.com/946171968',
  ];

  const handleButtonClick = async (index) => {
    const videoUrl = videoUrls[index];
    
    // Dynamically determine the backend API URL
    const apiBaseUrl = window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://stream1-chi.vercel.app';


    try {
      const response = await fetch(`${apiBaseUrl}/api/receiveVideo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoSrc: videoUrl }),
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log('Video URL sent successfully');
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Failed to send video URL:', error);
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
    </div>
  );
};

export default Page;
