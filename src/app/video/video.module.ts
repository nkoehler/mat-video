import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSliderModule } from '@angular/material';

import { MatSliderProgressBarComponent } from './internal/mat-slider-progress-bar/mat-slider-progress-bar.component';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';
import { EventService } from './services/event.service';
import { FullscreenService } from './services/fullscreen.service';
import { MatDownloadButtonComponent } from './ui/mat-download-button/mat-download-button.component';
import { MatFullscreenButtonComponent } from './ui/mat-fullscreen-button/mat-fullscreen-button.component';
import { MatPlayButtonComponent } from './ui/mat-play-button/mat-play-button.component';
import { MatPlaytimeControlComponent } from './ui/mat-playtime-control/mat-playtime-control.component';
import { MatQualityControlComponent } from './ui/mat-quality-control/mat-quality-control.component';
import { MatSeekProgressControlComponent } from './ui/mat-seek-progress-control/mat-seek-progress-control.component';
import { MatVideoSpinnerComponent } from './ui/mat-video-spinner/mat-video-spinner.component';
import { MatVolumeControlComponent } from './ui/mat-volume-control/mat-volume-control.component';
import { MatVideoComponent } from './video.component';

@NgModule({
    declarations: [
        SecondsToTimePipe,
        MatVideoComponent,
        MatSliderProgressBarComponent,
        MatPlayButtonComponent,
        MatVolumeControlComponent,
        MatDownloadButtonComponent,
        MatFullscreenButtonComponent,
        MatPlaytimeControlComponent,
        MatQualityControlComponent,
        MatVideoSpinnerComponent,
        MatSeekProgressControlComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatSliderModule
    ],
    exports: [
        MatVideoComponent
    ],
    providers: [
        FullscreenService,
        EventService
    ]
})
export class MatVideoModule { }