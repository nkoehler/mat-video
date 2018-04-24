import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'mat-play-button',
  templateUrl: './mat-play-button.component.html',
  styleUrls: ['./mat-play-button.component.css']
})
export class MatPlayButtonComponent {
  @Input() playing = false;
  @Output() playbackChanged = new EventEmitter();

  constructor() { }

  toggleVideoPlayback(): void {
    this.playbackChanged.emit();
  }

}
