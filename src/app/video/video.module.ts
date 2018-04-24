import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatSliderModule } from '@angular/material';
import { BigScreenModule } from 'angular-bigscreen';

import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';

import { MatVideoComponent } from './video.component';

import { MatSliderProgressBarComponent } from './controls/mat-slider-progress-bar/mat-slider-progress-bar.component';
import { MatPlayButtonComponent } from './controls/mat-play-button/mat-play-button.component';
import { MatVolumeControlComponent } from './controls/mat-volume-control/mat-volume-control.component';
import { MatDownloadButtonComponent } from './controls/mat-download-button/mat-download-button.component';
import { MatFullscreenButtonComponent } from './controls/mat-fullscreen-button/mat-fullscreen-button.component';
import { MatPlaytimeControlComponent } from './controls/mat-playtime-control/mat-playtime-control.component';
import { MatQualityControlComponent } from './controls/mat-quality-control/mat-quality-control.component';

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
        MatQualityControlComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatSliderModule,
        BigScreenModule.forRoot()
    ],
    exports: [
        MatVideoComponent
    ]
})
export class MatVideoModule { }