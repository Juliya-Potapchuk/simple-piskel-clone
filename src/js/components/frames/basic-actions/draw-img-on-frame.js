import { canvasObj } from '../../utils/prop-canvas-obj';
import './style.scss';

export function drawImgOnFrame(ctx) {
  const dataURL = localStorage.getItem('lastFrame');
  const img = new Image();
  img.src = dataURL;
  img.onload = function drawImage() {
    ctx.drawImage(img, 0, 0, canvasObj.width, canvasObj.height);
  };
}

export function drawImgOnCanvas(framectx, ctx) {
  const imageData = framectx.getImageData(0, 0, canvasObj.width, canvasObj.height);
  ctx.putImageData(imageData, 0, 0);
}
