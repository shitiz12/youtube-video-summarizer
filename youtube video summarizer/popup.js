document.addEventListener('DOMContentLoaded', function () {
    const videoUrlInput = document.getElementById('videoUrl');
    const summarizeButton = document.getElementById('summarizeButton');
    const summaryResult = document.getElementById('summaryResult');
  
    summarizeButton.addEventListener('click', async () => {
      const videoUrl = videoUrlInput.value.trim();
  
      if (videoUrl === '') {
        summaryResult.textContent = 'Please enter a YouTube video URL.';
        return;
      }
  

      summaryResult.textContent = 'Summarizing...';
  
      
      const summary = await fetchSummaryFromAPI(videoUrl);
  
      summaryResult.textContent = summary;
    });
  
    async function fetchSummaryFromAPI(videoUrl) {
    
  
      try {
        const response = await fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videoUrl }),
        });
  
        if (!response.ok) {
          throw new Error('Error fetching data from API');
        }
  
        const data = await response.json();
        return data.summary;
      } catch (error) {
        console.error(error);
        return 'An error occurred during summarization.';
      }
    }
  });
  