import './style.scss';

export const canvas = document.querySelector('.canvas');
export const ctx = canvas.getContext('2d');
export const canvasObj = {
  canvasSize: 512,
  width: 32,
  height: 32,
};
