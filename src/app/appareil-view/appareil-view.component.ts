import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth=false;
  appareils:any[];
  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    this.appareils=this.appareilService.appareils;
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
