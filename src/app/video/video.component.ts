import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { EventHandler } from './interfaces/event-handler.interface';
import { EventService } from './services/event.service';

@Component({
    selector: 'mat-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css', './styles/icons.css']
})
export class MatVideoComponent implements AfterViewInit, OnDestroy {
    @ViewChild('player') private player: ElementRef;
    @ViewChild('video') private video: ElementRef;

    @Input() src: string = null;
    @Input() title: string = null;
    @Input() autoplay: boolean = false;
    @Input() preload: boolean = true;
    @Input() loop: boolean = false;
    @Input() quality: boolean = true;
    @Input() fullscreen: boolean = true;
    @Input() playsinline: boolean = false;
    @Input() showFrameByFrame: boolean = false;
    @Input() fps: number = 29.97;
    @Input() download: boolean = false;
    @Input() color: ThemePalette = 'primary';
    @Input() spinner: string = 'spin';
    @Input() poster: string = null;
    @Input() keyboard: boolean = true;
    @Input() overlay: boolean = null;
    @Input() muted: boolean = false;
    @Output() mutedChange = new EventEmitter<boolean>();


    @Input()
    get time() {
        return this.getVideoTag().currentTime;
    }

    @Output() timeChange = new EventEmitter<number>();
    set time(val: number) {
        const video: HTMLVideoElement = this.getVideoTag();
        if (video && val) {
            if (val > video.duration) {
                val = video.duration;
            }
            if (val < 0) {
                val = 0;
            }
            if (val !== video.currentTime) {
                video.currentTime = val;
            }
            if (this.lastTime !== video.currentTime) {
                setTimeout(() => this.timeChange.emit(video.currentTime), 0);
                this.lastTime = video.currentTime;
            }
        }
    }

    playing: boolean = false;

    isFullscreen: boolean = false;

    videoWidth: number;
    videoHeight: number;
    lastTime: number;

    videoLoaded = false;

    private isMouseMoving: boolean = false;
    private isMouseMovingTimer: NodeJS.Timer;
    private isMouseMovingTimeout: number = 2000;

    private events: EventHandler[];

    constructor(
        private renderer: Renderer2,
        private evt: EventService
    ) { }

    ngAfterViewInit(): void {
        this.events = [
            { element: this.video.nativeElement, name: 'loadstart', callback: event => this.videoLoaded = false, dispose: null },
            { element: this.video.nativeElement, name: 'loadedmetadata', callback: event => this.evLoadedMetadata(event), dispose: null },
            { element: this.video.nativeElement, name: 'error', callback: event => console.error('Unhandled Video Error', event), dispose: null },
            { element: this.video.nativeElement, name: 'contextmenu', callback: event => event.preventDefault(), dispose: null },
            { element: this.video.nativeElement, name: 'timeupdate', callback: event => this.evTimeUpdate(event), dispose: null },
            { element: this.player.nativeElement, name: 'mousemove', callback: event => this.evMouseMove(event), dispose: null }
        ];

        this.video.nativeElement.onloadeddata = () => this.videoLoaded = true;

        this.evt.addEvents(this.renderer, this.events);
    }

    ngOnDestroy(): void {
        this.video.nativeElement.onloadeddata = null;

        this.evt.removeEvents(this.events);
    }

    load(): void {
        if (this.video && this.video.nativeElement)
            this.video.nativeElement.load();
    }

    getVideoTag(): HTMLVideoElement | null {
        return this.video && this.video.nativeElement ? this.video.nativeElement as HTMLVideoElement : null;
    }

    evLoadedMetadata(event: any): void {
        this.videoWidth = this.video.nativeElement.videoWidth;
        this.videoHeight = this.video.nativeElement.videoHeight;
        this.videoLoaded = true;
    }

    evMouseMove(event: any): void {
        this.isMouseMoving = true;
        clearTimeout(this.isMouseMovingTimer);
        this.isMouseMovingTimer = setTimeout(() => {
            this.isMouseMoving = false;
        }, this.isMouseMovingTimeout);
    }

    evTimeUpdate(event: any): void {
        this.time = this.getVideoTag().currentTime;
    }

    getOverlayClass(activeClass: string, inactiveClass: string): any {
        if (this.overlay === null) {
            return (!this.playing || this.isMouseMoving) ? activeClass : inactiveClass;
        } else {
            return this.overlay ? activeClass : inactiveClass;
        }
    }

}
