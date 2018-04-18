import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {

  urlApi = 'http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';
  // urlApi = './api/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';

  constructor(private _http: HttpClient) { }

  dailyForcast() {
    return this._http.get(this.urlApi).map(result => result);
  }

}
