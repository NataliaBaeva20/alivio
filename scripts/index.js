// переменные мобильной навигации
const burgerButton = document.querySelector('.burger-btn');
const burgerButtonIcon = document.querySelector('.burger-btn__icon');
const burgerMenu = document.querySelector('.burger-menu');

// переменные видео
const buttonPlay = document.querySelector('.story__button-play');
const videoFile = document.querySelector('.story__video');
const videoOverlay = document.querySelector('.story__video-overlay');

function openMobileNav() {
  burgerButtonIcon.classList.toggle('burger-btn__icon_opened');
  burgerMenu.classList.toggle('burger-menu_opened');
  document.body.classList.toggle('body_scroll_hidden');
}

function toggleOverlay(event) {
  if (event.type === 'mouseleave') {
    videoOverlay.classList.add('story__video-overlay_hidden');
  } else {
    videoOverlay.classList.remove('story__video-overlay_hidden');
  }
}

buttonPlay.addEventListener('click', function() {
  if (videoFile.paused) {
    videoFile.play();
    buttonPlay.classList.add('story__button-play_paused');
    videoOverlay.onmouseleave = toggleOverlay;
    videoOverlay.onmouseenter = toggleOverlay;
  } else {
    videoFile.pause();
    buttonPlay.classList.remove('story__button-play_paused');
    videoOverlay.onmouseleave = null;
    videoOverlay.onmouseenter = null;
  }
});

burgerButton.addEventListener('click', openMobileNav);