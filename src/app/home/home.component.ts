import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  

  todayDate = new Date()
  cityName!: string;
  weatherTemp: any;
  weatherWind: any;
  weatherIcon : any;
  weatherDetails: any;
  icon: any;
  name="";
  loading =true;
  

  constructor(private weatherApiService: WeatherService,
    private activatedRoute: ActivatedRoute){ }
  

  
  ngOnInit() {
    this.getWeatherData();
  }
  
  getWeatherData() {
    if (!this.cityName) {
      return 
    }
  this.weatherApiService.getWeatherData(this.cityName)
  .pipe(debounceTime(500),
  distinctUntilChanged())
  .subscribe((results:any) => {
      console.log(results)
      this.weatherTemp = results['main']
      this.weatherWind = results['wind']
      this.weatherDetails = results['weather'][0]
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
      this.loading = false;
    })
  }
}
