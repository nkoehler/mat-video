import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mat-frame-by-frame-control',
    templateUrl: './mat-frame-by-frame-control.component.html',
    styleUrls: ['./mat-frame-by-frame-control.component.css']
})
export class MatFrameByFrameControlComponent implements OnInit {
    @Input() video: HTMLVideoElement;
    @Input() fps: number = 29.97;

    constructor() { }

    ngOnInit() {
    }


    seekFrames(nbFrames: number) {
        if (!this.video.paused) {
            this.video.pause();
        }

        let currentFrames = this.video.currentTime * this.fps;
        let newPos = (currentFrames + nbFrames) / this.fps;
        newPos += 0.00001; // To fix a safari issue
        this.video.currentTime = newPos;

    }

}
