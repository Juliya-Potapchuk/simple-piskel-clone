import './style.scss';

const penSizeButtons = document.querySelectorAll('.pen-size');
const penSizeButton1 = document.querySelector('.pen-size-1');
const penSizeButton2 = document.querySelector('.pen-size-2');
const penSizeButton3 = document.querySelector('.pen-size-3');
const penSizeButton4 = document.querySelector('.pen-size-4');

export function getBrushSize(event, brushSizeAndColor) {
  // delete active style for all buttons with pen size
  penSizeButtons.forEach((item) => { item.classList.remove('tools-item-active'); });
  // add style for current active button with pen size
  (event.target).classList.add('tools-item-active');

  if (event.target === penSizeButton1) { brushSizeAndColor.brushSize = 1; }
  if (event.target === penSizeButton2) { brushSizeAndColor.brushSize = 2; }
  if (event.target === penSizeButton3) { brushSizeAndColor.brushSize = 3; }
  if (event.target === penSizeButton4) { brushSizeAndColor.brushSize = 4; }
}
