import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather.service';
import { currentweather } from '../current-weather';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Output() sendevent=new EventEmitter<string>();

  favC:string[];
  
  allcitys:currentweather[]=[];
  unitsisC=true;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.favoritedCities.subscribe(city => this.favC = city);
    for(let i=0;i<this.favC.length;i++){
      this._weatherService.searchByID(this.favC[i],this.unitsisC).subscribe((data)=>{
        this.allcitys[i] = new currentweather(data.name,
                                            data.sys.country,
                                            data.main.temp,
                                            data.weather[0].icon,
                                            data.weather[0].description,
                                            data.main.humidity);
      });
    }
  }
   
  sendFav(cityname:string){
    this.sendevent.emit(cityname);
  }

}
