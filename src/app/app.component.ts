import { Component, OnInit} from '@angular/core';
import { HTTPGetService } from './httpTest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HTTPGetService]
})

export class AppComponent{
  trainNumbers = [];
  compositionObj = {};
  stations = []
  self = this;
  constructor (private httpService: HTTPGetService){}
  ngOnInit() {
    this.httpService.getStations()
    .subscribe((response)=> this.stations = response)
  }
  
  stationsTrain(c) {
    this.httpService.getTrainNumber(c)
    .subscribe(function(response){
      this.compositionObj = ""
      this.trainNumbers = response
    }.bind(this))
  }
 
  trainCompositions(number, departureDate, index){
    this.httpService.getCompositions(number, departureDate)
    .subscribe(function(response){
    this.compositionObj = response
    this.selected = index
    }.bind(this))
  }
}
