import { AfterViewInit, Component, Input, OnDestroy, Renderer2 } from '@angular/core';

import { EventHandler } from '../../interfaces/event-handler.interface';
import { EventService } from '../../services/event.service';

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
  @Input() video: HTMLVideoElement;
  @Input() spinner: string = 'spin';

  videoBuffering = false;
  videoLoaded = false;

  private events: EventHandler[] = [];

  constructor(
    private renderer: Renderer2,
    private evt: EventService
  ) { }

  ngAfterViewInit(): void {
    this.events = [
      { element: this.video, name: 'loadstart', callback: event => this.videoLoaded = false, dispose: null },
      { element: this.video, name: 'loadedmetadata', callback: event => this.videoLoaded = true, dispose: null },
      { element: this.video, name: 'canplay', callback: event => this.videoBuffering = false, dispose: null },
      { element: this.video, name: 'waiting', callback: event => this.videoBuffering = true, dispose: null },
      { element: this.video, name: 'durationchange', callback: event => this.videoBuffering = true, dispose: null }
    ];

    this.video.onloadeddata = () => this.videoLoaded = true;

    this.evt.addEvents(this.renderer, this.events);
  }

  ngOnDestroy(): void {
    this.video.onloadeddata = null;

    this.evt.removeEvents(this.events);
  }

}
