chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'summarizeVideo') {
      const videoUrl = message.videoUrl;
      const summary = summarizeVideo(videoUrl);
      sendResponse({ summary });
    }
  });
  
  function summarizeVideo(videoUrl) {
    return 'This is a placeholder summary of the video.';
  }
  