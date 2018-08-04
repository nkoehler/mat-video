import { AfterViewInit, Component, ElementRef, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material';

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
    @Input() download: boolean = false;
    @Input() color: ThemePalette = 'primary';
    @Input() spinner: string = 'spin';
    @Input() poster: string = null;

    playing: boolean = false;

    isFullscreen: boolean = false;

    videoWidth: number;
    videoHeight: number;

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
            { element: this.player.nativeElement, name: 'mousemove', callback: event => this.evMouseMove(event), dispose: null }
        ];

        this.evt.addEvents(this.renderer, this.events);
    }

    ngOnDestroy(): void {
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

    getOverlayClass(activeClass: string, inactiveClass: string): any {
        return (!this.playing || this.isMouseMoving) ? activeClass : inactiveClass;
    }

}
