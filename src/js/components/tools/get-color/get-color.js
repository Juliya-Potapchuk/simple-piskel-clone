import './style.scss';

const primaryColorButton = document.getElementById('primary-color');
const secondaryColorButton = document.getElementById('secondary-color');

export function changeColor(event, brushSizeColorObj) {
  if (event.target === primaryColorButton) {
    brushSizeColorObj.primaryColor = event.target.value;
  }
  if (event.target === secondaryColorButton) {
    brushSizeColorObj.secondaryColor = event.target.value;
  }
}

export function replaceColor(brushSizeColorObj) { // color change when clicking on the arrow
  brushSizeColorObj.intermedColor = primaryColorButton.value;
  primaryColorButton.value = secondaryColorButton.value;
  secondaryColorButton.value = brushSizeColorObj.intermedColor;

  brushSizeColorObj.primaryColor = brushSizeColorObj.secondaryColor;
  brushSizeColorObj.secondaryColor = brushSizeColorObj.intermedColor;
}
