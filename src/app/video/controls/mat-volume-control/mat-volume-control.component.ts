import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mat-volume-control',
  templateUrl: './mat-volume-control.component.html',
  styleUrls: ['./mat-volume-control.component.css']
})
export class MatVolumeControlComponent {
  @Input() volume = 1;
  @Input() muted = false;
  @Output() volumeChanged = new EventEmitter<number>();
  @Output() mutedChanged = new EventEmitter();

  constructor() { }

  volumeEvent(event): void {
    this.volumeChanged.emit(event.value);
  }

  mutedEvent(): void {
    this.mutedChanged.emit();
  }

}
