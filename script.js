// Function to quickly assign element constants -------------------------- //
function getEl(el) {
    return document.querySelector(el);
  }
  
  // Play & Pause ---------------------------------------------------------- //
  function showPlayIcon() {
    elements.playBtn.classList.replace('fa-pause', 'fa-play');
    elements.playBtn.setAttribute('title', 'Play');
  }
  