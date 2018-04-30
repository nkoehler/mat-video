import { Component, Input, Output, EventEmitter, Renderer2, OnInit, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { EventHandler } from '../../interfaces/event-handler.interface';

@Component({
  selector: 'mat-seek-progress-control',
  templateUrl: './mat-seek-progress-control.component.html',
  styleUrls: ['./mat-seek-progress-control.component.css']
})
export class MatSeekProgressControlComponent implements AfterViewInit, OnDestroy {
  curTime: number = 0;
  bufTime: number = 0;

  curTimePercent: number = 0;
  bufTimePercent: number = 0;

  @Input() video: HTMLVideoElement = null;

  @Input() color: string;

  @Input() get currentTime() { return this.curTime; }
  set currentTime(seconds: number) { this.setCurrentTime(seconds); }

  @Output() currentTimeChanged = new EventEmitter<number>();

  @Input() get bufferedTime() { return this.bufTime; }
  set bufferedTime(seconds: number) { this.setBufferedTime(seconds); }

  @Output() bufferedTimeChanged = new EventEmitter<number>();

  private events: EventHandler[];

  constructor(private renderer: Renderer2) {
    this.events = [
      //{ element: this.video, name: 'seeking', callback: event => this.getCurrentTime(), dispose: null },
      { element: this.video, name: 'canplaythrough', callback: event => this.updateBufferedTime(), dispose: null },
      { element: this.video, name: 'timeupdate', callback: event => this.updateCurrentTime(), dispose: null },
      { element: this.video, name: 'progress', callback: event => this.updateBufferedTime(), dispose: null }
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

  seekVideo(value: number): void {
    const newTime = value / 100 * this.video.duration;
    this.setCurrentTime(newTime);
  }

  updateCurrentTime(): void {
    this.curTime = this.video.currentTime;
    this.curTimePercent = this.curTime / this.video.duration * 100;
    this.currentTimeChanged.emit(this.curTime);
  }

  setCurrentTime(time: number): void {
    this.curTime = time;
    this.curTimePercent = this.curTime / this.video.duration * 100;
    this.video.currentTime = this.curTime;
    this.currentTimeChanged.emit(this.curTime);
  }

  updateBufferedTime(): void {
    if (this.video.buffered.length > 0) {
      let largestBufferValue = 0;
      for (let i = 0; i < this.video.buffered.length; i++) {
        const cur = this.video.currentTime;
        const start = this.video.buffered.start(i);
        const end = this.video.buffered.end(i);
        if (start <= cur && end > cur && (end - start) > largestBufferValue)
          largestBufferValue = end;
      }
      this.setBufferedTime(largestBufferValue);
    }
  }

  setBufferedTime(time: number): void {
    this.bufTime = time;
    this.bufTimePercent = this.bufTime / this.video.duration * 100;
    this.bufferedTimeChanged.emit(this.bufTime);
  }

}
