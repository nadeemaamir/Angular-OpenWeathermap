import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  baseUrl: string = "https://api.openweathermap.org/data/2.5/group?id=";


  constructor(private http: HttpClient) { }

  GetWeather(cityIds: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + cityIds + '&units=metric&appid=55e782a7052490fc98a0ed0666c6c5db');
  }
}

