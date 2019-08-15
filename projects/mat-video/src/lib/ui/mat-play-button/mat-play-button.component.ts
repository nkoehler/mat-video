import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2 } from "@angular/core";

import { EventHandler } from "../../interfaces/event-handler.interface";
import { EventService } from "../../services/event.service";

@Component({
  selector: "mat-play-button",
  templateUrl: "./mat-play-button.component.html",
  styleUrls: ["./mat-play-button.component.scss"]
})
export class MatPlayButtonComponent implements AfterViewInit, OnDestroy {
  @Input() video: HTMLVideoElement;

  @Input() play = false;

  @Output() playChanged = new EventEmitter<boolean>();

  @Input() keyboard = true;

  private events: EventHandler[];

  constructor(private renderer: Renderer2, private evt: EventService) {}

  ngAfterViewInit(): void {
    this.events = [
      { element: this.video, name: "play", callback: event => this.setVideoPlayback(true), dispose: null },
      { element: this.video, name: "pause", callback: event => this.setVideoPlayback(false), dispose: null },
      { element: this.video, name: "durationchange", callback: event => this.setVideoPlayback(false), dispose: null },
      { element: this.video, name: "ended", callback: event => this.setVideoPlayback(false), dispose: null },
      { element: this.video, name: "click", callback: event => this.toggleVideoPlayback(), dispose: null }
    ];

    this.evt.addEvents(this.renderer, this.events);
  }

  ngOnDestroy(): void {
    this.evt.removeEvents(this.events);
  }

  setVideoPlayback(value: boolean) {
    if (this.play !== value) {
      this.toggleVideoPlayback();
    }
  }

  toggleVideoPlayback(): void {
    this.play = !this.play;
    this.updateVideoPlayback();
  }

  updateVideoPlayback(): void {
    this.play ? this.video.play() : this.video.pause();
    this.playChanged.emit(this.play);
  }

  @HostListener("document:keyup.space", ["$event"])
  onPlayKey(event: KeyboardEvent) {
    if (this.keyboard) {
      this.toggleVideoPlayback();
      event.preventDefault();
    }
  }
}
