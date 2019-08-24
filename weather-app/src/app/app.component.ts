import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather app'; 
  onhome:boolean=true;

  gotFavCity:string;

   switchpage(comefromhome:boolean){
     if(this.onhome && !comefromhome){
       this.onhome=!this.onhome;
     }
     if(!this.onhome && comefromhome){
      this.onhome=!this.onhome;
    }
   }
   receivFav($event){
    this.gotFavCity=$event;
    this.switchpage(true);
   }
}
