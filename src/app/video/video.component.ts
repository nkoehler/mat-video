import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit, OnDestroy, OnInit, Input, HostListener } from '@angular/core';
import { BigScreenService } from 'angular-bigscreen';
import { VideoSize } from './interfaces/video-size.interface';

@Component({
    selector: 'mat-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class MatVideoComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('player') private player: ElementRef;
    @ViewChild('video') private video: ElementRef;

    @Input() src: string = "";
    @Input() title: string = "";
    @Input() width: number = null;
    @Input() height: number = null;
    @Input() autoplay: boolean = false;
    @Input() preload: boolean = true;
    @Input() fullscreen: boolean = true;
    @Input() download: boolean = false;
    @Input() color: string = "primary";

    playing: boolean = false;
    duration: number;
    currentTime: number;
    currentTimePercentage: number = 0;
    bufferedTime: number;
    bufferedTimePercentage: number = 0;
    volume: number = 1;
    muted: boolean = false;
    isFullscreen: boolean = false;

    videoWidth: number;
    videoHeight: number;

    private evLoadedMetadata: () => void;
    private evPlay: () => void;
    private evPause: () => void;
    private evCanPlayThrough: () => void;
    private evDurationChange: () => void;
    private evEnded: () => void;
    private evError: () => void;
    private evPlaying: () => void;
    private evProgress: () => void;
    private evTimeUpdate: () => void;
    private evContextMenu: () => void;
    private evMouseMove: () => void;

    private isMouseMoving: boolean = false;
    private isMouseMovingTimer: NodeJS.Timer;
    private isMouseMovingTimeout: number = 1500;

    constructor(
        private renderer: Renderer2,
        private fscreen: BigScreenService
    ) { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.evLoadedMetadata = this.renderer.listen(this.video.nativeElement, 'loadedmetadata', event => {
            this.videoWidth = this.video.nativeElement.videoWidth;
            this.videoHeight = this.video.nativeElement.videoHeight;
        })

        this.evPlay = this.renderer.listen(this.video.nativeElement, 'play', event => {
            this.playing = true;
        });

        this.evPause = this.renderer.listen(this.video.nativeElement, 'pause', event => {
            this.playing = false;
        });

        this.evCanPlayThrough = this.renderer.listen(this.video.nativeElement, 'canplaythrough', event => {
            this.updateBuffer();
        });

        this.evDurationChange = this.renderer.listen(this.video.nativeElement, 'durationchange', event => {
            this.duration = this.video.nativeElement.duration;
        });

        this.evEnded = this.renderer.listen(this.video.nativeElement, 'ended', event => {
            this.playing = false;
        });

        this.evError = this.renderer.listen(this.video.nativeElement, 'error', event => {
            console.error("Unknown Video Error");
        });

        this.evPlaying = this.renderer.listen(this.video.nativeElement, 'playing', event => {
            // console.log("Playing");
        });

        this.evProgress = this.renderer.listen(this.video.nativeElement, 'progress', event => {
            this.updateBuffer();
        });

        this.evTimeUpdate = this.renderer.listen(this.video.nativeElement, 'timeupdate', event => {
            this.currentTime = this.video.nativeElement.currentTime;
            this.currentTimePercentage = this.currentTime / this.duration * 100;
        });

        this.evContextMenu = this.renderer.listen(this.video.nativeElement, 'contextmenu', event => {
            event.preventDefault();
        });

        this.evMouseMove = this.renderer.listen(this.player.nativeElement, 'mousemove', event => {
            this.isMouseMoving = true;
            clearTimeout(this.isMouseMovingTimer);
            this.isMouseMovingTimer = setTimeout(() => {
                this.isMouseMoving = false;
            }, this.isMouseMovingTimeout);
        });

        this.fscreen.onChange(event => {
            if (this.fscreen.isFullscreen()) {
                this.isFullscreen = true;
            } else {
                this.isFullscreen = false;
            }
        });

    }

    ngOnDestroy(): void {
        if (this.evLoadedMetadata) this.evLoadedMetadata();
        if (this.evPlay) this.evPlay();
        if (this.evPause) this.evPause();
        if (this.evCanPlayThrough) this.evCanPlayThrough();
        if (this.evDurationChange) this.evDurationChange();
        if (this.evEnded) this.evEnded();
        if (this.evError) this.evError();
        if (this.evPlaying) this.evPlaying();
        if (this.evProgress) this.evProgress();
        if (this.evTimeUpdate) this.evTimeUpdate();
        if (this.evContextMenu) this.evContextMenu();
        if (this.evMouseMove) this.evMouseMove();
    }

    toggleFullscreen(): void {
        if (!this.isFullscreen)
            this.fscreen.request(this.player.nativeElement);
        else
            this.fscreen.exit();
    }

    toggleVideoPlayback(): void {
        this.playing = !this.playing;
        if (this.playing) this.video.nativeElement.play();
        else this.video.nativeElement.pause();
    }

    toggleVolumeMute(): void {
        this.muted = !this.muted;
        this.video.nativeElement.muted = this.muted;
    }

    updateVolume(value: number): void {
        this.volume = value;
        this.video.nativeElement.volume = this.volume;

        if (this.volume > 0) {
            this.muted = false;
            this.video.nativeElement.muted = this.muted;
        }
    }

    seekVideo(event): void {
        const percentage = event.value / 100;
        const newTime = this.duration * percentage;
        this.video.nativeElement.currentTime = newTime;
    }

    updateBuffer(): void {
        if (this.video.nativeElement.buffered.length > 0) {
            let largestBufferValue = 0;
            for (let i = 0; i < this.video.nativeElement.buffered.length; i++) {
                const cur = this.video.nativeElement.currentTime;
                const start = this.video.nativeElement.buffered.start(i);
                const end = this.video.nativeElement.buffered.end(i);
                if (end > largestBufferValue && start <= cur && end > cur)
                    largestBufferValue = end;
            }
            this.bufferedTime = largestBufferValue;
            this.bufferedTimePercentage = this.bufferedTime / this.duration * 100;
        }
    }

    calculateAspectRatioFit(srcWidth: number, srcHeight: number, maxWidth: number, maxHeight: number): VideoSize {
        if (!maxHeight) maxHeight = (srcHeight / srcWidth) * maxWidth;
        if (!maxWidth) maxWidth = (srcWidth / srcHeight) * maxHeight;

        const ratios = [maxWidth / srcWidth, maxHeight / srcHeight];
        const ratio = Math.min(ratios[0], ratios[1]);

        const newWidth = srcWidth * ratio;
        const newHeight = srcHeight * ratio;
        const newLeft = newWidth < maxWidth ? (maxWidth - newWidth) / 2 : 0;
        const newTop = newHeight < maxHeight ? (maxHeight - newHeight) / 2 : 0;

        const res: VideoSize = {
            left: newLeft,
            top: newTop,
            width: newWidth,
            height: newHeight
        }

        return res;
    }

    getOverlayClass(): any {
        return { 'visible': !this.playing || this.isMouseMoving, 'hidden': this.playing && !this.isMouseMoving };
    }

    getHeaderStyle(): any {
        const heightPadding = 30;
        if (this.isFullscreen) {
            const res: VideoSize = this.calculateAspectRatioFit(this.videoWidth, this.videoHeight, screen.width, screen.height);
            const style = {
                position: `absolute`,
                left: `0px`,
                top: `${heightPadding}px`,
                width: `${screen.width}px`,
                'z-index': 1
            };
            return style;
        } else {
            const style = {
                position: `relative`,
                top: `${heightPadding}px`,
            }
            return style;
        }
    }

    getControlsStyle(): any {
        const heightPadding = 96;
        if (this.isFullscreen) {
            const res: VideoSize = this.calculateAspectRatioFit(this.videoWidth, this.videoHeight, screen.width, screen.height);
            const style = {
                position: `absolute`,
                left: `0px`,
                top: `${screen.height - heightPadding}px`,
                width: `${screen.width}px`,
                'z-index': 1
            };
            return style;
        } else {
            const style = {
                position: `relative`,
                bottom: `${heightPadding}px`,
            }
            return style;
        }
    }

    getVideoStyle(): any {
        if (this.isFullscreen) {
            const res: VideoSize = this.calculateAspectRatioFit(this.videoWidth, this.videoHeight, screen.width, screen.height);
            const style = {
                position: `absolute`,
                left: `${res.left}px`,
                top: `${res.top}px`,
                width: `${res.width}px`,
                height: `${res.height}px`,
            };
            return style;
        } else {
            if (this.width || this.height) {
                const res: VideoSize = this.calculateAspectRatioFit(this.videoWidth, this.videoHeight, this.width, this.height);
                const style = {
                    width: `${res.width}px`,
                    height: `${res.height}px`,
                }
                return style;
            } else {
                const style = {
                    width: `${this.videoWidth}px`,
                    height: `${this.videoHeight}px`,
                }
                return style;
            }
        }
    }
}
