import { addFrames } from './create-frame';
import './style.scss';

export function copyFrame(event) {
  const coppyWrapFrame = event.path[2];
  const copyIdFrame = coppyWrapFrame.firstElementChild.getAttribute('id');
  addFrames(event.target, coppyWrapFrame, copyIdFrame);
}
