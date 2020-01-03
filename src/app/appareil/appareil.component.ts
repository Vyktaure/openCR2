import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../appareil.service'


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService) { }

  ngOnInit(){
  }

  @Input() appareilName:string;
  @Input() appareilStatus:string;
  @Input() appareilIndex: number;
  @Input() id:number;
  
  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus==='allumé'){
      return 'green';
    } else if (this.appareilStatus==='éteint'){
      return 'red';
    }
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.appareilIndex);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.appareilIndex);
  }

}
