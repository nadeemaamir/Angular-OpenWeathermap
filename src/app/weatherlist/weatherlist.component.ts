import { Component, OnInit } from '@angular/core';
import { Weather } from '../shared/weather.model'
import { WeatherService } from '../shared/weather.service'


@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})

export class WeatherlistComponent implements OnInit {
  cityIds: string = "4119617,4125402,5128638,5368361,1850147";

  weather: Weather[] = [];
  errorMsg: string = "";

  constructor(private weatherService: WeatherService) {
    this.weather = [];
  }
  ngOnInit(): void {
    this.GetCityWeather();
  }

  GetCityWeather() {
    try {
      this.weather = [];
      this.weatherService.GetWeather(this.cityIds).subscribe(weatherinfo => {
        // this.weather.name = weatherinfo.name;
        // this.weather.description = weatherinfo.weather[0].description;
        let recordCount = weatherinfo.cnt;
        for (let i = 0; i < recordCount; i++) {
          var weather = new Weather();
          weather.name = weatherinfo.list[i].name;
          weather.main = weatherinfo.list[i].weather[0].main;
          weather.temp = parseInt(weatherinfo.list[i].main.temp);
          weather.temp_max = parseInt(weatherinfo.list[i].main.temp_max);
          weather.temp_min = parseInt(weatherinfo.list[i].main.temp_min);
          weather.icon = 'http://openweathermap.org/img/w/' + weatherinfo.list[i].weather[0].icon + '.png';
          this.weather.push(weather);
        }
      },
        error => {
          console.log(error);
        }
      );
    }
    catch (e) { console.log(e); }
  }
}
