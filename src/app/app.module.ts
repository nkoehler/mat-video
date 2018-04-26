import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SampleComponent } from './sample.component';
import { MatVideoModule } from './video/video.module';

@NgModule({
  declarations: [
    SampleComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatRadioModule,
    MatVideoModule
  ],
  providers: [],
  bootstrap: [SampleComponent]
})
export class AppModule { }
