import { addFrames } from './basic-actions/create-frame';
import { clickFrame } from './basic-actions/click-on-frame';
import { deleteFrame } from './basic-actions/delete-frame';
import { copyFrame } from './basic-actions/copy-frame';
import './style.scss';

export function frameManage(event) {
  if ((event.target).classList.contains('frame')) {
    clickFrame(event);
  }
  if ((event.target).classList.contains('add-frame')) {
    addFrames(event.target);
  }
  if ((event.target).classList.contains('bttn-delete-fr')) {
    deleteFrame(event);
  }
  if ((event.target).classList.contains('bttn-copy-fr')) {
    copyFrame(event);
  }
}
