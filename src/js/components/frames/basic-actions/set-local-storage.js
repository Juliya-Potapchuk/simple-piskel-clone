import { framesObjMG } from '../values-for-frame';
import './style.scss';

export function setLocalStrg(frameContainer, canvasImageData, canvasImage) {
  const arrForId = Array.from(frameContainer.querySelectorAll('.frame'));

  // add id for each frame
  arrForId.forEach((currentValue, index) => {
    if (currentValue.classList.contains('frame-item-active')) {
      framesObjMG[`frameId${index}`] = canvasImageData;
      localStorage.setItem('objAllFrames', canvasImage);
    }
  });

  localStorage.setItem('lastFrame', canvasImage);
}
