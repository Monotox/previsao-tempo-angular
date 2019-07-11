import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private APPID = 'c78b7f5d1ad4ccdbf90904161e675fbf';

  constructor(private httpClient: HttpClient) { }

  getWeather() {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast?q=Brasil&APPID=' + this.APPID);
  }
}
