import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "mat-frame-by-frame-control",
  templateUrl: "./mat-frame-by-frame-control.component.html",
  styleUrls: ["./mat-frame-by-frame-control.component.scss"]
})
export class MatFrameByFrameControlComponent implements OnInit {
  @Input() video: HTMLVideoElement;
  @Input() fps = 29.97;

  constructor() {}

  ngOnInit() {}

  seekFrames(nbFrames: number) {
    if (!this.video.paused) {
      this.video.pause();
    }

    const currentFrames = this.video.currentTime * this.fps;
    const newPos = (currentFrames + nbFrames) / this.fps + 0.00001;
    this.video.currentTime = newPos;
  }
}
