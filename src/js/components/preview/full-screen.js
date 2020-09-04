import './style.scss';

export function fullScreen() {
  const element = document.getElementById('canvas-animation');
  element.requestFullscreen();

  function screenChange() {
  // fullscreenElement is assigned to html element if any element is in full screen mode.
    if (document.fullscreenElement) {
      console.log(`Current full screen element is : ${document.fullscreenElement}`);
    } else if ('exitFullscreen' in document) { // exitFullscreen us used to exit full screen manually
      document.exitFullscreen();
    }
  }

  // called when an event goes full screen and vice-versa.
  document.addEventListener('fullscreenchange', screenChange);

  // called when requestFullscreen(); fails. it may fail if iframe don't have allowfullscreen
  //  attribute enabled or for something else.
  document.addEventListener('fullscreenerror', () => { console.log('Full screen failed'); });
}
