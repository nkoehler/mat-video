import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2 } from '@angular/core';

import { EventHandler } from '../../interfaces/event-handler.interface';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'mat-play-button',
  templateUrl: './mat-play-button.component.html',
  styleUrls: ['./mat-play-button.component.css']
})
export class MatPlayButtonComponent implements AfterViewInit, OnDestroy {
  playing: boolean = false;

  @Input() video: HTMLVideoElement;

  @Input() get play() { return this.playing; }
  set play(value: boolean) { this.setVideoPlayback(value); }

  @Output() playChanged = new EventEmitter<boolean>();

  private events: EventHandler[] = [];

  constructor(
    private renderer: Renderer2,
    private evt: EventService
  ) { }

  ngAfterViewInit(): void {
    this.events = [
      { element: this.video, name: 'play', callback: event => this.setVideoPlayback(true), dispose: null },
      { element: this.video, name: 'pause', callback: event => this.setVideoPlayback(false), dispose: null },
      { element: this.video, name: 'durationchange', callback: event => this.setVideoPlayback(false), dispose: null },
      { element: this.video, name: 'ended', callback: event => this.setVideoPlayback(false), dispose: null },
      { element: this.video, name: 'click', callback: event => this.toggleVideoPlayback(), dispose: null }
    ];

    this.evt.addEvents(this.renderer, this.events);
  }

  ngOnDestroy(): void {
    this.evt.removeEvents(this.events);
  }

  setVideoPlayback(value: boolean) {
    if (this.playing !== value)
      this.toggleVideoPlayback();
  }

  toggleVideoPlayback(): void {
    this.playing = !this.playing;
    this.updateVideoPlayback();
  }

  updateVideoPlayback(): void {
    this.playing ? this.video.play() : this.video.pause();
    this.playChanged.emit(this.playing);
  }

  @HostListener('document:keyup', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    const key = event.key || event.keyCode;

    if (key === ' ' || key === 32) this.toggleVideoPlayback();

    event.preventDefault();
  }

}
