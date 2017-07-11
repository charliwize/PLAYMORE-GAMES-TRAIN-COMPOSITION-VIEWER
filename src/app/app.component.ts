import { Component, OnInit} from '@angular/core';
import { HTTPGetService } from './httpTest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HTTPGetService]
})

export class AppComponent  implements OnInit {
  trainNumbers = [];
  compositionObj = {}
  self = this;
  constructor (private httpService: HTTPGetService){}
  ngOnInit() {
    this.httpService.getTrainNumber()
    //.subscribe((response)=> this.trainNumbers = response)
    .subscribe(function(response){
      this.trainNumbers = response
    }.bind(this))
  }
  trainCompositions(number, departureDate){
    this.httpService.getCompositions(number, departureDate)
    .subscribe(function(response){
    this.compositionObj = response
    console.log(this.compositionObj)
    }.bind(this))
  }
}