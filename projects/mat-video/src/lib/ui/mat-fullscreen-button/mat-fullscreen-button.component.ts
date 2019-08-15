import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";

import { EventService } from "../../services/event.service";
import { FullscreenService } from "../../services/fullscreen.service";

@Component({
  selector: "mat-fullscreen-button",
  templateUrl: "./mat-fullscreen-button.component.html",
  styleUrls: ["./mat-fullscreen-button.component.scss"]
})
export class MatFullscreenButtonComponent implements OnInit {
  canFullscreen = false;

  @Input() player: HTMLVideoElement;

  @Input() fullscreen = false;

  @Output() fullscreenChanged = new EventEmitter<boolean>();

  @Input() keyboard = true;

  constructor(private fscreen: FullscreenService, private evt: EventService) {}

  ngOnInit(): void {
    if (this.fscreen.isEnabled()) {
      this.canFullscreen = true;
    }

    this.fscreen.onChange(event => (this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false)));
  }

  setFullscreen(value: boolean) {
    if (this.canFullscreen && this.fullscreen !== value) {
      this.toggleFullscreen();
    }
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

  @HostListener("document:keyup.f", ["$event"])
  onFullscreenKey(event: KeyboardEvent) {
    if (this.keyboard) {
      this.toggleFullscreen();
      event.preventDefault();
    }
  }
}
