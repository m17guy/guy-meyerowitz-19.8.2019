import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { currentweather } from './current-weather';
import {BehaviorSubject} from 'rxjs';
import { from } from 'rxjs';

@Injectable()
export class WeatherService {

  private favSource=new BehaviorSubject<string[]>([]);
  favoritedCities=this.favSource.asObservable();

  tempunits:string;
  apiKey= '24b8020dc520a4858959d863c3406698';

  constructor(public http: HttpClient) { }
  
  changeFavCities(city:string[]){
    this.favSource.next(city);
  }

  localWeather(lat:string, lon:string, units:boolean){
    this.checkunits(units)
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units="+this.tempunits);
  }
  forecast5geo(lat:string, lon:string, units:boolean){
    this.checkunits(units)
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units="+this.tempunits);
  }


  searchweather(name:string, units:boolean){
    this.checkunits(units)
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+name+"&appid="+this.apiKey+"&units="+this.tempunits);
  }
  searchByID(id:string, units:boolean){
    this.checkunits(units)
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?id="+id+"&appid="+this.apiKey+"&units="+this.tempunits);
  }
  forecast5(city:string, units:boolean){
    this.checkunits(units)
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+this.apiKey+"&units="+this.tempunits);
  }
  checkunits(ismetric:boolean){
    if(ismetric){
      this.tempunits="metric"
    }
    else{
      this.tempunits="imperial"
    }
  }

}
