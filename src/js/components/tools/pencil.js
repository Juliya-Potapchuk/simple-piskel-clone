import { canvas, ctx, canvasObj } from '../utils/prop-canvas-obj';

const { canvasSize } = canvasObj;
let isDrawing = false;
canvas.width = canvasObj.width;
canvas.height = canvasObj.height;

export function pencilDraw(actionsCanvas, brushSizeColorObj) {
  function draw(evt) {
    if (!isDrawing) return;

    const pixelSize = Math.round(canvasSize / canvas.width);
    const coordinates = {};
    // position of the canvas on the page
    const canvasClientRect = canvas.getBoundingClientRect();

    // position of the canvas on the page (upper left corner, if there's scroll)
    coordinates.startX = canvasClientRect.left + window.pageXOffset;
    coordinates.startY = canvasClientRect.top + window.pageYOffset;

    function getPointCoordinates() {
      // x,y position inside the canvas
      const x = Math.floor((evt.pageX - coordinates.startX) / pixelSize);
      const y = Math.floor((evt.pageY - coordinates.startY) / pixelSize);
      return [x, y];
    }

    const [x, y] = getPointCoordinates();
    ctx.fillRect(
      x,
      y,
      brushSizeColorObj.brushSize,
      brushSizeColorObj.brushSize
    );
  }

  // Mouse events
  function penMouseDown(evt) {
    if (evt.which === 1) {
      ctx.fillStyle = brushSizeColorObj.primaryColor;
    }
    if (evt.which === 3) {
      ctx.fillStyle = brushSizeColorObj.secondaryColor;
    }

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

  function pemMouseOut() {
    actionsCanvas.pemMouseOut = ['mouseout', pemMouseOut];
    isDrawing = false;
    return isDrawing;
  }

  canvas.addEventListener('mousedown', penMouseDown);
  canvas.addEventListener('mousemove', penMouseMove);
  canvas.addEventListener('mouseup', penMouseUp);
  canvas.addEventListener('mouseout', pemMouseOut);
}
