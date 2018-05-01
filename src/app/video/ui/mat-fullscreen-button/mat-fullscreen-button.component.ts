import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { EventService } from '../../services/event.service';
import { FullscreenService } from '../../services/fullscreen.service';

@Component({
  selector: 'mat-fullscreen-button',
  templateUrl: './mat-fullscreen-button.component.html',
  styleUrls: ['./mat-fullscreen-button.component.css']
})
export class MatFullscreenButtonComponent implements OnInit {
  canFullscreen: boolean = false;

  @Input() player: HTMLVideoElement;

  @Input() fullscreen: boolean = false;

  @Output() fullscreenChanged = new EventEmitter<boolean>();

  constructor(
    private fscreen: FullscreenService,
    private evt: EventService
  ) { }

  ngOnInit(): void {
    if (this.fscreen.isEnabled())
      this.canFullscreen = true;

    this.fscreen.onChange(event => this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false));
  }

  setFullscreen(value: boolean) {
    if (this.canFullscreen && this.fullscreen !== value)
      this.toggleFullscreen();
  }

  toggleFullscreen(): void {
    this.fullscreen = !this.fullscreen;
    this.updateFullscreen();
  }

  updateFullscreen(): void {
    this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
    this.fullscreenChanged.emit(this.fullscreen);
  }

  onChangesFullscreen(value: boolean): void {
    this.fullscreen = value;
    this.fullscreenChanged.emit(this.fullscreen);
  }

  @HostListener('document:keyup', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.evt.keyboardEvent(event, 'f', 70, () => this.toggleFullscreen());
  }

}
