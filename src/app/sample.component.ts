import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  version = VERSION.full;
  appversion: string = require('../../package.json').version;

  src = "/assets/WinterTimelapse.mp4";
  title = "Timelapse of a Cold Winter Day";
  width = 600;
  height = 400;
  autoplay = false;
  preload = true;
  fullscreen = true;
  download = true;
  color = "primary";

  reloadVideo(): void {
    const tmp = this.src;
    this.src = 'Reloading video...';
    setTimeout(() => {
      this.src = tmp;
    }, 200);
  }
}
