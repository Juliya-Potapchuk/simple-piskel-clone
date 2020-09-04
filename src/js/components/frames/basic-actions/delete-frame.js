import { framesObjMG } from '../values-for-frame';
import { canvasObj, ctx } from '../../utils/prop-canvas-obj';
import './style.scss';

const frameContainer = document.querySelector('.frames-container');
const arrWrapperFr = frameContainer.getElementsByClassName('wrapper-frame');

export function deleteFrame(event) {
  // save first frame and clean it
  if (arrWrapperFr.length === 1) {
    const firstFr = document.getElementById('frameId0');
    firstFr.classList.add('frame-item-active');
    const ctxFirstFrame = firstFr.getContext('2d');
    ctxFirstFrame.clearRect(0, 0, canvasObj.width, canvasObj.height);
    ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);
    return;
  }

  const currWrappFrame = event.path[2];// get wrapper current frame
  currWrappFrame.remove();// delete wrapper current frame

  const lastFrInContainer = frameContainer.lastElementChild.firstElementChild;
  lastFrInContainer.classList.add('frame-item-active');// add style for current active item
  const currentActiveFr = document.querySelector('.frame-item-active');
  const lastFrameCTX = currentActiveFr.getContext('2d');
  const imageData = lastFrameCTX.getImageData(0, 0, canvasObj.width, canvasObj.height);
  ctx.putImageData(imageData, 0, 0);

  // remove frame image from image object
  const idDelFrame = currWrappFrame.firstElementChild.id;
  delete framesObjMG[idDelFrame];
}
