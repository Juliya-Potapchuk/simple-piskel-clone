import { canvas, ctx, canvasObj } from '../utils/prop-canvas-obj';

const { canvasSize } = canvasObj;
canvas.width = canvasObj.width;
canvas.height = canvasObj.height;
let isDrawing = false;

export function eraserDraw(actionsCanvas, brushSizeColorObj) {
  function draw(evt) {
    if (!isDrawing) return;

    const pixelSize = Math.round(canvasSize / canvas.width);
    const coordinates = {};
    const canvasClientRect = canvas.getBoundingClientRect();

    coordinates.startX = canvasClientRect.left + window.pageXOffset;
    coordinates.startY = canvasClientRect.top + window.pageYOffset;

    function getPointCoordinates() {
      const x = Math.floor((evt.pageX - coordinates.startX) / pixelSize);
      const y = Math.floor((evt.pageY - coordinates.startY) / pixelSize);
      return [x, y];
    }
    const [x, y] = getPointCoordinates();
    ctx.clearRect(
      x,
      y,
      brushSizeColorObj.brushSize,
      brushSizeColorObj.brushSize
    );
  }

  // Mouse events
  function penMouseDown(evt) {
    actionsCanvas.penMouseDown = ['mousedown', penMouseDown];
    isDrawing = true;
    draw(evt);
  }

  function penMouseMove(evt) {
    actionsCanvas.penMouseMove = ['mousemove', penMouseMove];
    draw(evt);
  }

  function penMouseUp() {
    actionsCanvas.penMouseUp = ['mouseup', penMouseUp];
    isDrawing = false;
    return isDrawing;
  }

  function penMouseOut() {
    actionsCanvas.penMouseOut = ['mouseout', penMouseOut];
    isDrawing = false;
    return isDrawing;
  }

  canvas.addEventListener('mousedown', penMouseDown);
  canvas.addEventListener('mousemove', penMouseMove);
  canvas.addEventListener('mouseup', penMouseUp);
  canvas.addEventListener('mouseout', penMouseOut);
}
