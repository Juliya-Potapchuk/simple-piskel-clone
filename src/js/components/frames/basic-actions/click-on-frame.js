import { canvasObj, ctx } from '../../utils/prop-canvas-obj';
import { framesObjMG } from '../values-for-frame';
import './style.scss';

export function clickFrame(event) {
  const evtTarget = event.target;
  const frameContainer = document.querySelector('.frames-container');
  const arrFrames = frameContainer.getElementsByClassName('frame');
  ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);
  (Array.from(arrFrames)).forEach((item) => item.classList.remove('frame-item-active'));// delete active style for all frames

  if (evtTarget.classList.contains('frame')) { // active class only for frame
    evtTarget.classList.add('frame-item-active');
  }

  // redraw the image from active frame to canvas
  const { id } = evtTarget;
  const imageData = framesObjMG[`${id}`];
  ctx.putImageData(imageData, 0, 0);
}
