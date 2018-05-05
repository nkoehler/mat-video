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

  src = 'assets/NASA.mp4';
  title = 'NASA Rocket Launch';
  width = 600;
  height = 400;
  autoplay = false;
  preload = true;
  download = true;
  fullscreen = true;
  color = 'primary';
  spinner = 'spin';
  poster = 'assets/NASA.jpg';

  reloadVideo(): void {
    const tmp = this.src;
    this.src = 'Reloading video...';
    setTimeout(() => {
      this.src = tmp;
    }, 200);
  }
}
