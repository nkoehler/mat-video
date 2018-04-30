import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSliderModule } from '@angular/material';

import { MatDownloadButtonComponent } from './controls/mat-download-button/mat-download-button.component';
import { MatFullscreenButtonComponent } from './controls/mat-fullscreen-button/mat-fullscreen-button.component';
import { MatPlayButtonComponent } from './controls/mat-play-button/mat-play-button.component';
import { MatPlaytimeControlComponent } from './controls/mat-playtime-control/mat-playtime-control.component';
import { MatQualityControlComponent } from './controls/mat-quality-control/mat-quality-control.component';
import { MatSeekProgressControlComponent } from './controls/mat-seek-progress-control/mat-seek-progress-control.component';
import { MatVideoSpinnerComponent } from './controls/mat-video-spinner/mat-video-spinner.component';
import { MatVolumeControlComponent } from './controls/mat-volume-control/mat-volume-control.component';
import { MatSliderProgressBarComponent } from './internal/mat-slider-progress-bar/mat-slider-progress-bar.component';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';
import { FullscreenService } from './services/fullscreen.service';
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
        FullscreenService
    ]
})
export class MatVideoModule { }