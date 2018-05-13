import { Component, VERSION } from '@angular/core';
import * as buildInfo from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  version = VERSION.full;
  appversion: string = (<any>buildInfo)['version'];

  ngclass = 'mat-video-responsive';

  src = 'assets/NASA.mp4';
  title = 'NASA Rocket Launch';
  width = 600;
  height = 337.5;
  autoplay = false;
  preload = true;
  loop = false;
  quality = true;
  download = true;
  fullscreen = true;
  color = 'primary';
  spinner = 'spin';
  poster = 'assets/NASA.jpg';

}
