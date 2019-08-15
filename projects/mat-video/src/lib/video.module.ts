import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";

import { MatVideoSourceDirective } from "./directives/mat-video-source.directive";
import { MatVideoTrackDirective } from "./directives/mat-video-track.directive";
import { MatSliderProgressBarComponent } from "./internal/mat-slider-progress-bar/mat-slider-progress-bar.component";
import { SecondsToTimePipe } from "./pipes/seconds-to-time.pipe";
import { EventService } from "./services/event.service";
import { FullscreenService } from "./services/fullscreen.service";
import { MatDownloadButtonComponent } from "./ui/mat-download-button/mat-download-button.component";
import { MatFrameByFrameControlComponent } from "./ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component";
import { MatFullscreenButtonComponent } from "./ui/mat-fullscreen-button/mat-fullscreen-button.component";
import { MatPlayButtonComponent } from "./ui/mat-play-button/mat-play-button.component";
import { MatQualityControlComponent } from "./ui/mat-quality-control/mat-quality-control.component";
import { MatSeekProgressControlComponent } from "./ui/mat-seek-progress-control/mat-seek-progress-control.component";
import { MatTimeControlComponent } from "./ui/mat-time-control/mat-time-control.component";
import { MatVideoSpinnerComponent } from "./ui/mat-video-spinner/mat-video-spinner.component";
import { MatVolumeControlComponent } from "./ui/mat-volume-control/mat-volume-control.component";
import { MatVideoComponent } from "./video.component";

@NgModule({
  declarations: [
    SecondsToTimePipe,
    MatVideoComponent,
    MatSliderProgressBarComponent,
    MatPlayButtonComponent,
    MatVolumeControlComponent,
    MatDownloadButtonComponent,
    MatFullscreenButtonComponent,
    MatTimeControlComponent,
    MatQualityControlComponent,
    MatVideoSpinnerComponent,
    MatSeekProgressControlComponent,
    MatVideoSourceDirective,
    MatVideoTrackDirective,
    MatFrameByFrameControlComponent
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatSliderModule],
  exports: [MatVideoComponent, MatVideoSourceDirective, MatVideoTrackDirective],
  providers: [FullscreenService, EventService]
})
export class MatVideoModule {}
