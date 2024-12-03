const handleButtonClick = async (videoLink) => {
  try {
    const response = await fetch('http://localhost:3001/api/receiveVideo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ videoSrc: videoLink }),
    });

    const data = await response.json();
    console.log(data); // Should show { message: 'Video URL received', videoSrc: 'URL' }
  } catch (error) {
    console.error('Error sending video:', error);
  }
};
