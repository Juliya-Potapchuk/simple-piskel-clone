import { fullScreen } from './full-screen';
import { saveImg } from './save-img';

export function previewManage(event) {
  if ((event.target).classList.contains('bttn-full-screen')) {
    fullScreen(event);
  }
  if ((event.target).classList.contains('bttn-save-apng')) {
    saveImg(event);
  }
}
