import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, Renderer2 } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

import { EventHandler } from "../../interfaces/event-handler.interface";
import { EventService } from "../../services/event.service";

@Component({
  selector: "mat-seek-progress-control",
  templateUrl: "./mat-seek-progress-control.component.html",
  styleUrls: ["./mat-seek-progress-control.component.scss"]
})
export class MatSeekProgressControlComponent implements AfterViewInit, OnDestroy {
  curTimePercent = 0;
  bufTimePercent = 0;

  @Input() video: HTMLVideoElement = null;

  @Input() color: ThemePalette = "primary";

  @Input() currentTime = 0;

  @Output() currentTimeChanged = new EventEmitter<number>();

  @Input() bufferedTime = 0;

  @Output() bufferedTimeChanged = new EventEmitter<number>();

  private events: EventHandler[];

  constructor(private renderer: Renderer2, private evt: EventService) {}

  ngAfterViewInit(): void {
    this.events = [
      { element: this.video, name: "seeking", callback: event => this.updateCurrentTime(this.video.currentTime), dispose: null },
      { element: this.video, name: "canplaythrough", callback: event => this.updateBufferedTime(), dispose: null },
      { element: this.video, name: "timeupdate", callback: event => this.updateCurrentTime(this.video.currentTime), dispose: null },
      { element: this.video, name: "progress", callback: event => this.updateBufferedTime(), dispose: null }
    ];

    this.evt.addEvents(this.renderer, this.events);
  }

  ngOnDestroy(): void {
    this.evt.removeEvents(this.events);
  }

  seekVideo(value: number): void {
    const percentage = value / 100;
    const newTime = this.video.duration * percentage;
    this.video.currentTime = newTime;
  }

  updateCurrentTime(time: number): void {
    this.currentTime = time;
    this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
  }

  updateBufferedTime(): void {
    if (this.video.buffered.length > 0) {
      let largestBufferValue = 0;
      for (let i = 0; i < this.video.buffered.length; i++) {
        const cur = this.video.currentTime;
        const start = this.video.buffered.start(i);
        const end = this.video.buffered.end(i);
        if (start <= cur && end > cur && end - start > largestBufferValue) {
          largestBufferValue = end;
        }
      }
      this.bufferedTime = largestBufferValue;
      this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
    }
  }

  updateTime(emitter: EventEmitter<number>, time: number): number {
    emitter.emit(time);
    return (time / this.video.duration) * 100;
  }
}
