import { Component, EventEmitter, HostListener, Input, Output, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'mat-play-button',
  templateUrl: './mat-play-button.component.html',
  styleUrls: ['./mat-play-button.component.css']
})
export class MatPlayButtonComponent implements AfterViewInit, OnDestroy {
  playing: boolean = false;

  @Input() video: HTMLVideoElement = null;

  @Input() get play() { return this.playing; }
  set play(value: boolean) { this.setVideoPlayback(value); }

  @Output() playChanged = new EventEmitter<boolean>();

  clickEvent: () => void;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.clickEvent = this.renderer.listen(this.video, 'click', () => this.toggleVideoPlayback());
  }

  ngOnDestroy(): void {
    if (this.clickEvent) this.clickEvent();
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
    if (event.defaultPrevented) return;

    const key = event.key || event.keyCode;

    if (key === ' ' || key === 32) this.toggleVideoPlayback();

    event.preventDefault();
  }

}
