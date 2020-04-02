import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

import { EventService } from "../../services/event.service";

@Component({
  selector: "mat-volume-control",
  templateUrl: "./mat-volume-control.component.html",
  styleUrls: ["./mat-volume-control.component.scss"]
})
export class MatVolumeControlComponent implements AfterViewInit, OnChanges {
  @Input() video: HTMLVideoElement = null;

  @Input() color: ThemePalette = "primary";

  @Input() volume = 1;

  @Output() volumeChanged = new EventEmitter<number>();

  @Input() muted = false;

  @Output() mutedChanged = new EventEmitter<boolean>();

  @Input() keyboard = true;

  constructor(private evt: EventService) {}

  ngAfterViewInit(): void {
    this.updateMuted(false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.muted) {
      this.updateMuted(false);
    }
  }

  setVolume(value: number): void {
    this.volume = value;
    this.video.volume = this.volume;
    this.volumeChanged.emit(this.volume);

    if (this.volume > 0) {
      this.setMuted(false);
    }
  }

  setMuted(value: boolean): void {
    if (this.muted !== value) {
      this.toggleMuted();
    }
  }

  toggleMuted(): void {
    this.muted = !this.muted;
    this.updateMuted();
  }

  updateMuted(emitChange: boolean = true): void {
    if (this.video) {
      this.video.muted = this.muted;
    }

    if (emitChange) {
      this.mutedChanged.emit(this.muted);
    }
  }

  @HostListener("document:keyup.m", ["$event"])
  onMuteKey(event: KeyboardEvent) {
    if (this.keyboard) {
      this.toggleMuted();
      event.preventDefault();
    }
  }
}
