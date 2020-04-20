import { AfterViewInit, Component, Input, OnDestroy, Renderer2 } from "@angular/core";

import { EventHandler } from "../../interfaces/event-handler.interface";
import { EventService } from "../../services/event.service";

@Component({
  selector: "mat-video-spinner",
  templateUrl: "./mat-video-spinner.component.html",
  styleUrls: [
    "./mat-video-spinner.component.scss",
    "./indicators/spin.scss",
    "./indicators/dot.scss",
    "./indicators/split-ring.scss",
    "./indicators/hourglass.scss"
  ]
})
export class MatVideoSpinnerComponent implements AfterViewInit, OnDestroy {
  @Input() video: HTMLVideoElement;
  @Input() spinner = "spin";

  videoBuffering = false;

  private events: EventHandler[] = [];

  constructor(private renderer: Renderer2, private evt: EventService) {}

  ngAfterViewInit(): void {
    this.events = [
      { element: this.video, name: "loadstart", callback: event => (this.videoBuffering = true), dispose: null },
      { element: this.video, name: "loadedmetadata", callback: event => (this.videoBuffering = false), dispose: null },
      { element: this.video, name: "playing", callback: event => (this.videoBuffering = false), dispose: null },
      { element: this.video, name: "waiting", callback: event => (this.videoBuffering = true), dispose: null },
      { element: this.video, name: "durationchange", callback: event => (this.videoBuffering = true), dispose: null }
    ];

    this.video.onloadeddata = () => (this.videoBuffering = false);

    this.evt.addEvents(this.renderer, this.events);
  }

  ngOnDestroy(): void {
    this.video.onloadeddata = null;

    this.evt.removeEvents(this.events);
  }
}
