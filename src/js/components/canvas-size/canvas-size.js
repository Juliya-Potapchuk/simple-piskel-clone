import { ctx, canvasObj, canvas } from '../utils/prop-canvas-obj';
import { framesObjMG } from '../frames/values-for-frame';
import './style.scss';

const buttonsSizCanv = document.querySelectorAll('.button-size-canvas');
const button32 = document.querySelector('.size-canvas-32');
const button64 = document.querySelector('.size-canvas-64');
const button128 = document.querySelector('.size-canvas-128');
const framesArr = document.getElementsByClassName('frame');
const canvasAimation = document.getElementById('canvas-animation');
button32.classList.add('button-size-canvas-act');

// redraw canvas
function changeSizeCanv(size) {
  canvasObj.width = size;
  canvasObj.height = size;
  canvasObj.diffScale = 1;
  canvas.width = canvasObj.width;
  canvas.height = canvasObj.height;
  const dataURL = localStorage.getItem('canvasImage');// Saving a picture to canvas when change scale
  const img = new Image();
  img.src = dataURL;
  img.onload = function drawImage() {
    ctx.drawImage(img, 0, 0);
  };
}

// redraw frames
function changeSizeFr() {
  Array.from(framesArr).forEach((item) => {
    const ctxFrame = item.getContext('2d');
    const { id } = item;
    item.width = canvasObj.width;
    item.height = canvasObj.height;
    const imageData = framesObjMG[`${id}`];
    ctxFrame.putImageData(imageData, 0, 0);
  });
}

export function changeSizeCanvas(event) {
  buttonsSizCanv.forEach((item) => item.classList.remove('button-size-canvas-act'));// delete active style for all buttons
  (event.target).classList.add('button-size-canvas-act');// add style for current active button
  localStorage.setItem('canvasImage', canvas.toDataURL());

  if (event.target === button32) {
    canvasAimation.width = canvasObj.width;
    canvasAimation.height = canvasObj.height;
    changeSizeCanv(32);
    changeSizeFr();
    canvasAimation.width = canvasObj.width;
    canvasAimation.height = canvasObj.height;
  }
  if (event.target === button64) {
    changeSizeCanv(64);
    changeSizeFr();
    canvasAimation.width = canvasObj.width;
    canvasAimation.height = canvasObj.height;
  }
  if (event.target === button128) {
    changeSizeCanv(128);
    changeSizeFr();
    canvasAimation.width = canvasObj.width;
    canvasAimation.height = canvasObj.height;
  }
}
