import { Component, OnInit } from '@angular/core';
import {AppareilService} from './appareil.service';
import {Observable,interval} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appareil';
  secondes:  number;

  appareils : any[];

  constructor(private appareilService: AppareilService){
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
    //emit value in sequence every 1 second
    const secondes = interval(1000);
    //output: 0,1,2,3,4,5....
    const subscribe = secondes.subscribe(
        (value) => {this.secondes=value;
        },
        (error) => {console.log('erreur : ' +error);
        },
        ()=> {console.log('Observable complete');
        }
    );
  }
 

}
