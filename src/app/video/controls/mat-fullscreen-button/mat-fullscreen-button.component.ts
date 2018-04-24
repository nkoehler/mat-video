import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BigScreenService } from 'angular-bigscreen';

@Component({
  selector: 'mat-fullscreen-button',
  templateUrl: './mat-fullscreen-button.component.html',
  styleUrls: ['./mat-fullscreen-button.component.css']
})
export class MatFullscreenButtonComponent implements OnInit {
  @Input() isFullscreen = false;
  @Output() fullscreenChanged = new EventEmitter();

  private canFullscreen: boolean = false;

  constructor(private fscreen: BigScreenService) { }

  ngOnInit(): void {
    if (this.fscreen.isEnabled())
      this.canFullscreen = true;
  }

  toggleFullscreen(): void {
    this.fullscreenChanged.emit();
  }

}
