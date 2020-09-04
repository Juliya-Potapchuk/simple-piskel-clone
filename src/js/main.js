import { chooseTool } from './components/tools/main-tools';
import { changeSizeCanvas } from './components/canvas-size/canvas-size';
import { userSignInOut } from './components/user-block/user-block';
import { frameManage } from './components/frames/main-frame';
import { drawFirstFrame } from './components/frames/basic-actions/create-frame';
import { previewManage } from './components/preview/main-preview';
import { startPreview, changeFps } from './components/preview/animate';
import { openSpritePage, backLandingPage } from './components/utils/landing-page';

document.addEventListener('click', (event) => {
  const parentClass = event.target.parentElement.className;
  if ((event.target).classList.contains('button-create-sprite')) {
    openSpritePage();
  }
  if ((event.target).classList.contains('logo')) {
    backLandingPage();
  }
  if (parentClass === 'user-block') {
    userSignInOut(event);
  }
  if (parentClass === 'tools-list') {
    chooseTool(event);
  }
  if (parentClass === 'container-size-canvas') {
    changeSizeCanvas(event);
  }
  if (parentClass === 'wrapper-btn-anim-save') {
    previewManage(event);
  }
  if (parentClass === 'wrapper-frame-area'
   || parentClass === 'wrapper-frame'
   || parentClass === 'container-buttons-frame') {
    frameManage(event);
  }
});

(document.getElementById('slider-fps')).addEventListener('input', changeFps);

canvas.addEventListener('mouseup', () => {
  drawFirstFrame();
  startPreview();
});
