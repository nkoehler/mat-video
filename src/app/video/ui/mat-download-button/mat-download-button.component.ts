import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mat-download-button',
  templateUrl: './mat-download-button.component.html',
  styleUrls: ['./mat-download-button.component.css']
})
export class MatDownloadButtonComponent {
  @Input() video: HTMLVideoElement;
  @Input() title: string;

  constructor() { }

}
