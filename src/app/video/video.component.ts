import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

import { EventHandler } from './interfaces/event-handler.interface';
import { VideoSize } from './interfaces/video-size.interface';
import { FullscreenService } from './services/fullscreen.service';

@Component({
    selector: 'mat-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css', './fonts/icons.css']
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

    private isMouseMoving: boolean = false;
    private isMouseMovingTimer: NodeJS.Timer;
    private isMouseMovingTimeout: number = 1500;

    private events: EventHandler[];

    constructor(
        private renderer: Renderer2,
        private fscreen: FullscreenService
    ) { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.events = [
            { element: this.video, name: 'loadedmetadata', callback: event => this.evLoadedMetadata(event), dispose: null },
            { element: this.video, name: 'play', callback: event => this.playing = true, dispose: null },
            { element: this.video, name: 'pause', callback: event => this.playing = false, dispose: null },
            { element: this.video, name: 'canplaythrough', callback: event => this.evCanPlayThrough(event), dispose: null },
            { element: this.video, name: 'durationchange', callback: event => this.duration = this.video.nativeElement.duration, dispose: null },
            { element: this.video, name: 'ended', callback: event => this.playing = false, dispose: null },
            { element: this.video, name: 'error', callback: event => console.error('Unhandled Video Error'), dispose: null },
            { element: this.video, name: 'playing', callback: event => event, dispose: null },
            { element: this.video, name: 'progress', callback: event => this.updateBuffer(), dispose: null },
            { element: this.video, name: 'timeupdate', callback: event => this.evTimeUpdate(event), dispose: null },
            { element: this.video, name: 'contextmenu', callback: event => event.preventDefault(), dispose: null },
            { element: this.player, name: 'mousemove', callback: event => this.evMouseMove(event), dispose: null }
        ];

        this.addEvents();

        this.fscreen.onChange(event => this.fscreen.isFullscreen() ? this.isFullscreen = true : this.isFullscreen = false);
    }

    ngOnDestroy(): void {
        this.removeEvents();
    }

    addEvents(): void {
        for (const event of this.events)
            event.dispose = this.renderer.listen(event.element.nativeElement, event.name, newEvent => event.callback(newEvent));
    }

    removeEvents(): void {
        for (const event of this.events)
            if (event.dispose)
                event.dispose();
    }

    evLoadedMetadata(event: any): void {
        this.videoWidth = this.video.nativeElement.videoWidth;
        this.videoHeight = this.video.nativeElement.videoHeight;
    }

    evCanPlayThrough(event: any): void {
        this.updateBuffer();
    }

    evTimeUpdate(event: any): void {
        this.currentTime = this.video.nativeElement.currentTime;
        this.currentTimePercentage = this.currentTime / this.duration * 100;
    }

    evMouseMove(event: any): void {
        this.isMouseMoving = true;
        clearTimeout(this.isMouseMovingTimer);
        this.isMouseMovingTimer = setTimeout(() => {
            this.isMouseMoving = false;
        }, this.isMouseMovingTimeout);
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
