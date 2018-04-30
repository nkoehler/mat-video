import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Renderer2,
    ViewChild,
} from '@angular/core';

import { EventHandler } from './interfaces/event-handler.interface';
import { VideoSize } from './interfaces/video-size.interface';
import { FullscreenService } from './services/fullscreen.service';

@Component({
    selector: 'mat-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css', './styles/icons.css']
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
    @Input() spinner: string = "spin";
    @Input() poster: string = null;

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

    videoLoaded = false;
    videoBuffering = true;

    private isMouseMoving: boolean = false;
    private isMouseMovingTimer: NodeJS.Timer;
    private isMouseMovingTimeout: number = 2000;

    private events: EventHandler[];

    constructor(
        private renderer: Renderer2,
    ) { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.events = [
            { element: this.video, name: 'loadstart', callback: event => this.videoLoaded = false, dispose: null },
            { element: this.video, name: 'loadedmetadata', callback: event => this.videoLoaded = true, dispose: null },
            { element: this.video, name: 'play', callback: event => this.playing = true, dispose: null },
            { element: this.video, name: 'pause', callback: event => this.playing = false, dispose: null },

            { element: this.video, name: 'ended', callback: event => this.playing = false, dispose: null },
            { element: this.video, name: 'error', callback: event => console.error('Unhandled Video Error', event), dispose: null },


            { element: this.video, name: 'waiting', callback: event => this.videoBuffering = true, dispose: null },
            { element: this.video, name: 'contextmenu', callback: event => event.preventDefault(), dispose: null },
            { element: this.player, name: 'mousemove', callback: event => this.evMouseMove(event), dispose: null }
        ];

        this.addEvents();


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
        this.videoLoaded = true;
    }

    evDurationChange(event: any): void {
        this.duration = this.video.nativeElement.duration
        this.playing = false;
        this.videoBuffering = true;
    }

    evMouseMove(event: any): void {
        this.isMouseMoving = true;
        clearTimeout(this.isMouseMovingTimer);
        this.isMouseMovingTimer = setTimeout(() => {
            this.isMouseMoving = false;
        }, this.isMouseMovingTimeout);
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

    getMouseClass(): any {
        return { 'show-mouse': !this.playing || this.isMouseMoving, 'hide-mouse': this.playing && !this.isMouseMoving };
    }

    getOverlayClass(): any {
        return { 'visible': !this.playing || this.isMouseMoving, 'hidden': this.playing && !this.isMouseMoving };
    }

    getVideoPlayerStyle(): any {
        if (this.isFullscreen) {
            const style = {
                width: '100%',
                height: '100%'
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
