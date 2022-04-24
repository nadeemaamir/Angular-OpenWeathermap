import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service'
import { of } from 'rxjs';
describe('Weather Service', () => {
  let weatherService: WeatherService;
  let mockHttp: HttpClient;

  beforeEach(async () => {
    weatherService = new WeatherService(mockHttp);
  });

  it('service should send response', () => {
    let cityIds: string = "4119617,4125402,5128638,5368361,1850147";
    let mockresponse = {
      "cnt": 1,
      "list": [
        {
          "coord": {
            "lon": -93.253,
            "lat": 35.329
          },
          "sys": {
            "country": "US",
            "timezone": -18000,
            "sunrise": 1650713426,
            "sunset": 1650761510
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "main": {
            "temp": 21.89,
            "feels_like": 21.96,
            "temp_min": 21.64,
            "temp_max": 22.83,
            "pressure": 1017,
            "humidity": 70
          },
          "visibility": 10000,
          "wind": {
            "speed": 3.09,
            "deg": 150
          },
          "clouds": {
            "all": 100
          },
          "dt": 1650723015,
          "id": 4119617,
          "name": "London"
        }
      ]
    };

    spyOn(weatherService, 'GetWeather').and.returnValue(of(mockresponse));
    let data: any = {};
    weatherService.GetWeather(cityIds).subscribe(res => { data = res; })
    expect(data).toEqual(mockresponse);
  });


});
