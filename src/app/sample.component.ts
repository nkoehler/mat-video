import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  version = VERSION.full;
  appversion: string = require('../../package.json').version;

  src = "https://media.w3.org/2010/05/sintel/trailer.mp4";
  title = "Trailer for something cool!";
  width = 600;
  height = 400;
  autoplay = false;
  preload = true;
  fullscreen = true;
  download = true;

  reloadVideo(): void {
    const tmp = this.src;
    this.src = 'Reloading video...';
    setTimeout(() => {
      this.src = tmp;
    }, 200);
  }
}
