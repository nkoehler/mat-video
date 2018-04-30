import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mat-playtime-control',
  templateUrl: './mat-playtime-control.component.html',
  styleUrls: ['./mat-playtime-control.component.css']
})
export class MatPlaytimeControlComponent {
  @Input() video: HTMLVideoElement;

  constructor() { }

}
