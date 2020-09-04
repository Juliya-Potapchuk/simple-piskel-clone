import { canvasObj } from '../utils/prop-canvas-obj';

const frames = document.getElementsByClassName('frame');
const canvasAimation = document.getElementById('canvas-animation');
const ctxCanvasAimation = canvasAimation.getContext('2d');
const slider = document.getElementById('slider-fps');
const output = document.getElementById('fps-text');

// slider
let valueFps = slider.value;
output.innerHTML = slider.value; // set default value
export function changeFps() {
  // get value fps
  valueFps = slider.value;
  output.innerHTML = slider.value;
  return valueFps;
}

// animation
export function startPreview() {
  let index = 0;
  canvasAimation.width = canvasObj.width;
  canvasAimation.height = canvasObj.height;

  function animate() {
    const framesPerSecond = valueFps;
    const framesData = [];

    // get all images of frames
    Array.from(frames).forEach((frame) => {
      const ctx = frame.getContext('2d');
      const frameIMG = ctx.getImageData(
        0,
        0,
        canvasObj.width,
        canvasObj.height
      );
      framesData.push(frameIMG);
    });

    setTimeout(() => {
      requestAnimationFrame(animate);
      ctxCanvasAimation.clearRect(
        0,
        0,
        canvasAimation.width,
        canvasAimation.height
      );
      if (index === framesData.length) {
        index = 0;
      }

      // if image not empty, draw it on preview canvas
      if (framesData[index]) {
        ctxCanvasAimation.putImageData(framesData[index], 0, 0);
      }

      index += 1;
    }, 1000 / framesPerSecond);
  }
  animate();
}
