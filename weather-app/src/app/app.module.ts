import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {WeatherService} from './weather.service'
import {RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';

const appRoutes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'favorites' , component:FavoritesComponent
  },
  {
    path:'home',component:HomeComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
