import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'mat-volume-control',
  templateUrl: './mat-volume-control.component.html',
  styleUrls: ['./mat-volume-control.component.css']
})
export class MatVolumeControlComponent {
  @Input() video: HTMLVideoElement = null;

  @Input() color: ThemePalette = 'primary';

  @Input() volume: number = 1;

  @Output() volumeChanged = new EventEmitter<number>();

  @Input() muted: boolean = false;

  @Output() mutedChanged = new EventEmitter<boolean>();

  constructor(private evt: EventService) { }

  setVolume(value: number): void {
    this.volume = value;
    this.video.volume = this.volume;
    this.volumeChanged.emit(this.volume);

    if (this.volume > 0)
      this.setMuted(false);
  }

  setMuted(value: boolean): void {
    if (this.muted !== value)
      this.toggleMuted();
  }

  toggleMuted(): void {
    this.muted = !this.muted;
    this.updateMuted();
  }

  updateMuted(): void {
    this.video.muted = this.muted;
    this.mutedChanged.emit(this.muted);
  }

  @HostListener('document:keyup', ['$event'])
  onMuteKey(event: KeyboardEvent) {
    this.evt.keyboardEvent(event, 'm', 77, () => this.toggleMuted());
  }

}
