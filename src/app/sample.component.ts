import { Component, VERSION } from '@angular/core';
import buildInfo from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  version = VERSION.full;
  appversion: string = buildInfo.version;

  ngclass = 'mat-video-responsive';

  src = 'assets/NASA.mp4';
  title = 'NASA Rocket Launch';
  width = 600;
  height = 337.5;
  currentTime = 0;
  autoplay = false;
  preload = true;
  loop = false;
  quality = true;
  download = true;
  fullscreen = true;
  showFrameByFrame = false;
  keyboard = true;
  color = 'primary';
  spinner = 'spin';
  poster = 'assets/NASA.jpg';
  overlay = null;
  muted = false;
}
