import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { FullscreenService } from '../../services/fullscreen.service';

@Component({
  selector: 'mat-fullscreen-button',
  templateUrl: './mat-fullscreen-button.component.html',
  styleUrls: ['./mat-fullscreen-button.component.css']
})
export class MatFullscreenButtonComponent implements OnInit {
  canFullscreen: boolean = false;
  isFullscreen: boolean = false;

  @Input() player: HTMLVideoElement;

  @Input() get fullscreen() { return this.isFullscreen; }
  set fullscreen(value: boolean) { this.setFullscreen(value); }

  @Output() fullscreenChanged = new EventEmitter<boolean>();

  constructor(private fscreen: FullscreenService) { }

  ngOnInit(): void {
    if (this.fscreen.isEnabled())
      this.canFullscreen = true;

    this.fscreen.onChange(event => this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false));
  }

  setFullscreen(value: boolean) {
    if (this.canFullscreen && this.isFullscreen !== value)
      this.toggleFullscreen();
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
    this.updateFullscreen();
  }

  updateFullscreen(): void {
    this.isFullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
    this.fullscreenChanged.emit(this.isFullscreen);
  }

  onChangesFullscreen(value: boolean): void {
    this.isFullscreen = value;
    this.fullscreenChanged.emit(this.isFullscreen);
  }

  @HostListener('document:keyup', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    const key = event.key || event.keyCode;

    if (key === 'f' || key === 70) this.toggleFullscreen();

    event.preventDefault();
  }

}
