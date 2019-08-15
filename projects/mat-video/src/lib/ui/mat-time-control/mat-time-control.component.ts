import { Component, Input } from "@angular/core";

@Component({
  selector: "mat-time-control",
  templateUrl: "./mat-time-control.component.html",
  styleUrls: ["./mat-time-control.component.scss"]
})
export class MatTimeControlComponent {
  @Input() video: HTMLVideoElement;

  constructor() {}
}
