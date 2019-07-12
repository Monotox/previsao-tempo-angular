import { Component } from '@angular/core';
import {WeatherApiService} from './services/weather-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public current;
  public min;
  public max;
  public humidity;

  title = 'previsao-hoje';

  constructor(private WeatherApi: WeatherApiService) {
    this.init();
  }

  init() {
    this.WeatherApi.getWeather().subscribe(data => {
      this.min = data[`list`][0][`main`][`temp_min`];
      this.max = data[`list`][0][`main`][`temp_max`];
      this.humidity = data[`list`][0][`main`][`humidity`];
      this.current = data[`list`][0][`main`][`temp`];
      },
        error => console.log(error));
  }
}
