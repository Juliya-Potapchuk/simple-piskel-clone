const main = document.querySelector('.main');
const landingPage = document.querySelector('.landing-page');
const btnCreateSprite = document.querySelector('.button-create-sprite');
const logo = document.querySelector('.logo');

export function openSpritePage() {
  main.classList.remove('hidden');
  main.classList.add('visible');
  landingPage.classList.remove('visible');
  landingPage.classList.add('hidden');
  btnCreateSprite.classList.add('hidden');

  logo.classList.add('cursor');
}

export function backLandingPage() {
  main.classList.remove('visible');
  main.classList.add('hidden');
  landingPage.classList.remove('hidden');
  landingPage.classList.add('visible');
  btnCreateSprite.classList.remove('hidden');

  logo.classList.remove('cursor');
}
