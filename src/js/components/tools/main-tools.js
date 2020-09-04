import { getBrushSize } from './get-brush-size/get-brush-size';
import { canvas } from '../utils/prop-canvas-obj';
import { bucketDraw } from './bucket';
import { pencilDraw } from './pencil';
import { eraserDraw } from './eraser';
import { changeColor, replaceColor } from './get-color/get-color';
import './style.scss';

const penSizeContainer = document.querySelector('.pen-size-container');
const pencil = document.getElementById('pencil');
const bucket = document.getElementById('bucket');
const itemsArr = document.querySelectorAll('.tools-item');
const colorContainer = document.querySelector('.color-container');
const arrowReplColor = document.getElementById('icon-change-color');
const actionsCanvas = {};

// default settings
const brushSizeColorObj = {
  brushSize: 1,
  primaryColor: '#000',
  secondaryColor: '#fff',
  intermedColor: '#000', // intermediate color is used when replacing colors in a block
};
document.querySelector('.pen-size-1').classList.add('tools-item-active');
pencil.classList.add('tools-item-active');
pencilDraw(actionsCanvas, brushSizeColorObj);

// Get and replace color
colorContainer.addEventListener('change', (event) => changeColor(event, brushSizeColorObj));
arrowReplColor.addEventListener('click', () => replaceColor(brushSizeColorObj));

// Get brush size
penSizeContainer.addEventListener('click', (event) => getBrushSize(event, brushSizeColorObj));

export function chooseTool(event) {
  // clear all events on canvas
  (Object.values(actionsCanvas)).forEach((item) => canvas.removeEventListener(item[0], item[1]));
  itemsArr.forEach((item) => item.classList.remove('tools-item-active'));// delete active style for all items
  (event.target).classList.add('tools-item-active');// add style for current active item

  if (event.target === pencil) { pencilDraw(actionsCanvas, brushSizeColorObj); }
  if (event.target === bucket) { bucketDraw(actionsCanvas, brushSizeColorObj); }
  if (event.target === eraser) { eraserDraw(actionsCanvas, brushSizeColorObj); }
}
