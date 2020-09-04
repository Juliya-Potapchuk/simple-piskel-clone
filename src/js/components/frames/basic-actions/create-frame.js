import { canvas, canvasObj, ctx } from '../../utils/prop-canvas-obj';
import { setLocalStrg } from './set-local-storage';
import { drawImgOnFrame, drawImgOnCanvas } from './draw-img-on-frame';
import './style.scss';

const frameContainer = document.querySelector('.frames-container');
const arrFrames = frameContainer.getElementsByClassName('frame');
// create first frame
const firstFrame = document.querySelector('.frame');
const frameCTX = firstFrame.getContext('2d');
firstFrame.width = canvasObj.width;
firstFrame.height = canvasObj.height;

export function drawFirstFrame() {
  if (firstFrame.classList.contains('frame-item-active')) {
    const imageData = ctx.getImageData(0, 0, canvasObj.width, canvasObj.height);

    setLocalStrg(frameContainer, imageData, canvas.toDataURL());
    drawImgOnFrame(frameCTX); // redraw frame from canvas
  }
}

export function addFrames(evtTarget, coppyWrapFrame, copyIdFrame) {
  ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);
  (Array.from(arrFrames)).forEach((item) => item.classList.remove('frame-item-active'));// delete active style for all frames

  // create wrapper for second and other frames
  const wrapperFrame = document.createElement('div');
  wrapperFrame.classList.add('wrapper-frame');

  // if the copied frame is added after the parent frame
  if (evtTarget.classList.contains('bttn-copy-fr') === true) {
    coppyWrapFrame.after(wrapperFrame);
  } else {
    frameContainer.append(wrapperFrame);
  }

  // create second and other frames
  const frame = document.createElement('canvas');
  const currentCTX = frame.getContext('2d');
  frame.width = canvasObj.width;
  frame.height = canvasObj.height;
  frame.classList.add('frame');
  wrapperFrame.append(frame);
  frame.classList.add('frame-item-active');// add style for current active item

  // add id and ctx for each frame
  (Array.from(arrFrames)).forEach((currentValue, index) => {
    arrFrames[index].setAttribute('id', `frameId${index}`);
  });

  // create block with buttons for second and other frames
  const containerBttnFr = document.createElement('div');// add container for buttons
  containerBttnFr.classList.add('container-buttons-frame');
  wrapperFrame.append(containerBttnFr);
  const container = document.querySelector('.container-buttons-frame');// add  buttons
  const content = container.innerHTML;
  containerBttnFr.insertAdjacentHTML('beforeend', content);

  if (evtTarget.classList.contains('bttn-copy-fr') === true) {
    // transfer the parent frame image to the copy frame
    const frameParentCopy = document.getElementById(copyIdFrame);
    const frameParentCopyCTX = frameParentCopy.getContext('2d');
    const imageData = frameParentCopyCTX.getImageData(0, 0, canvasObj.width, canvasObj.height);
    currentCTX.putImageData(imageData, 0, 0);
    drawImgOnCanvas(currentCTX, ctx); // draw this image on canvas
  }

  canvas.addEventListener('mouseup', () => {
    if (frame.classList.contains('frame-item-active')) {
      const imageData = ctx.getImageData(0, 0, canvasObj.width, canvasObj.height);
      setLocalStrg(frameContainer, imageData, canvas.toDataURL());
      drawImgOnFrame(currentCTX); // redraw frame from canvas
    }
  });
}
