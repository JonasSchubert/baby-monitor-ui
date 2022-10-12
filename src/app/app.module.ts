import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SensorsComponent } from './sensors/sensors.component';
import { CameraComponent } from './camera/camera.component';
import { AudioComponent } from './audio/audio.component';
import { FooterComponent } from './footer/footer.component';
import { HealthcheckColorPipe } from './footer/healthcheck-color.pipe';
import { HealthcheckTextPipe } from './footer/healthcheck-text.pipe';
import { LullabyComponent } from './lullaby/lullaby.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    CameraComponent,
    AudioComponent,
    FooterComponent,
    LullabyComponent,
    HealthcheckColorPipe,
    HealthcheckTextPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
