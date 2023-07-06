import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private weatherAPI_KEY = environment.API_KEY
  private weatherAPI_URL = environment.API_URL

  constructor(public http:HttpClient) { 
  }
  getWeatherData(cityName: string = ''):Observable<any>{
    return this.http.get<any>(`${this.weatherAPI_URL}/weather?q=${cityName}&appid=${this.weatherAPI_KEY}`);  
  }
  
}