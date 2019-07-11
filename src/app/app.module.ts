import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WeatherApiService} from './services/weather-api.service';
import {HttpClientModule} from '@angular/common/http';
import {CelsiusPipe} from './shared/celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CelsiusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
