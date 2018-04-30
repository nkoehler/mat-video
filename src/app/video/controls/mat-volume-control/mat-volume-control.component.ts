import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'mat-volume-control',
  templateUrl: './mat-volume-control.component.html',
  styleUrls: ['./mat-volume-control.component.css']
})
export class MatVolumeControlComponent {
  vol: number = 1;
  mute: boolean = false;

  @Input() video: HTMLVideoElement = null;

  @Input() color = "primary";

  @Input() get volume() { return this.vol; }
  set volume(value: number) { this.setVolume(value); }

  @Output() volumeChanged = new EventEmitter<number>();

  @Input() get muted() { return this.mute; }
  set muted(value: boolean) { this.setMuted(value); }

  @Output() mutedChanged = new EventEmitter<boolean>();

  constructor() { }

  setVolume(value: number): void {
    this.vol = value;
    this.video.volume = this.vol;
    this.volumeChanged.emit(this.vol);

    if (this.vol > 0)
      this.setMuted(false);
  }

  setMuted(value: boolean): void {
    if (this.mute !== value)
      this.toggleMuted();
  }

  toggleMuted(): void {
    this.mute = !this.mute;
    this.updateMuted();
  }

  updateMuted(): void {
    this.video.muted = this.mute;
    this.mutedChanged.emit(this.mute);
  }

  @HostListener('document:keyup', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.defaultPrevented) return;

    const key = event.key || event.keyCode;

    if (key === 'm' || key === 77) this.toggleMuted();

    event.preventDefault();
  }

}
