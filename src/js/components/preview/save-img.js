import { canvasObj } from '../utils/prop-canvas-obj';
import './style.scss';

const UPNG = require('upng-js');
const download = require('downloadjs');

const frames = document.getElementsByClassName('frame');

export function saveImg() {
  const framesData = [];
  Array.from(frames).forEach((frame) => {
    const ctx = frame.getContext('2d');
    const arrayBuffer = ctx.getImageData(0, 0, canvasObj.width, canvasObj.height).data.buffer;
    framesData.push(arrayBuffer);
  });

  const result = UPNG.encode(framesData, canvasObj.width, canvasObj.height, 0, 1000 / 2);
  download(result, 'download.apng', 'image/apng');
}
