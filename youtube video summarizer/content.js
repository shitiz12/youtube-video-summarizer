
if (window.location.href.includes('youtube.com/watch?v=')) {
    
    const videoTitle = document.querySelector('h1.title');
    if (videoTitle) {
      console.log('Video Title:', videoTitle.innerText);
    }
  }
  