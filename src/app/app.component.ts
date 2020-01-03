import { Component, OnInit } from '@angular/core';
import {AppareilService} from './appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appareil';

  appareils : any[];

  constructor(private appareilService: AppareilService){
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')){
      this.appareilService.switchOfAll();
    } else {
      return null;
    }
  }

}
