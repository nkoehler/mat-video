import { Component, Input } from '@angular/core';

@Component({
  selector: 'mat-video-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: [
    './spinner.component.scss',
    './indicators/spin.css',
    './indicators/dot.css',
    './indicators/split-ring.css',
    './indicators/hourglass.css'
  ]
})
export class MatVideoSpinnerComponent {

  @Input() spinner: string = 'spin';

  constructor() { }

}
