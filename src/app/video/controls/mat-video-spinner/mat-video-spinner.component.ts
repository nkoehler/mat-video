import { AfterViewInit, Component, Input, OnDestroy, Renderer2 } from '@angular/core';

import { EventHandler } from '../../interfaces/event-handler.interface';

@Component({
  selector: 'mat-video-spinner',
  templateUrl: './mat-video-spinner.component.html',
  styleUrls: [
    './mat-video-spinner.component.scss',
    './indicators/spin.css',
    './indicators/dot.css',
    './indicators/split-ring.css',
    './indicators/hourglass.css'
  ]
})
export class MatVideoSpinnerComponent implements AfterViewInit, OnDestroy {
  @Input() video: HTMLVideoElement = null;
  @Input() spinner: string = 'spin';

  videoBuffering = false;
  videoLoaded = false;

  private events: EventHandler[];

  constructor(private renderer: Renderer2) {
    this.events = [
      { element: this.video, name: 'loadstart', callback: event => this.videoLoaded = false, dispose: null },
      { element: this.video, name: 'loadedmetadata', callback: event => this.videoLoaded = true, dispose: null },
      { element: this.video, name: 'canplay', callback: event => this.videoBuffering = false, dispose: null },
      { element: this.video, name: 'waiting', callback: event => this.videoBuffering = true, dispose: null },
      { element: this.video, name: 'durationchange', callback: event => this.videoBuffering = true, dispose: null }
    ];
  }

  ngAfterViewInit(): void {
    for (const event of this.events)
      event.dispose = this.renderer.listen(this.video, event.name, newEvent => event.callback());
  }

  ngOnDestroy(): void {
    for (const event of this.events)
      if (event.dispose)
        event.dispose();
  }

}
