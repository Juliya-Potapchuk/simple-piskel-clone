import { canvas, ctx, canvasObj } from '../utils/prop-canvas-obj';

canvas.width = canvasObj.width;
canvas.height = canvasObj.height;

export function bucketDraw(actionsCanvas, brushSizeColorObj) {
  function fill(evt) {
    actionsCanvas.fill = ['mousedown', fill];
    if (evt.which === 1) { ctx.fillStyle = brushSizeColorObj.primaryColor; }
    if (evt.which === 3) { ctx.fillStyle = brushSizeColorObj.secondaryColor; }

    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  canvas.addEventListener('mousedown', fill);
}
