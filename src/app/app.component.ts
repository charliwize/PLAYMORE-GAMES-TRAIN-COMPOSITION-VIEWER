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
  default = "";
  stations = []
  selectedStation = "";
  checked = false
  //err message 
  errorMsg: string
  constructor (private httpService: HTTPGetService){}
  ngOnInit() {
    this.httpService.getStations()
    .subscribe((response)=> this.stations = response, 
    error => this.errorMsg = error)
  }
  
  stationsTrain(c) {
    this.httpService.getTrainInfo(c)
    .subscribe(function(response){
      this.compositionObj = {}
      this.selected = ""
      this.trainNumbers = response
      this.checked = false
    }.bind(this),
      error => this.errorMsg = error)
  }
 
  trainCompositions(number, departureDate, index){
    this.httpService.getCompositions(number, departureDate)
    .subscribe(function(response){
    this.checked = true
    this.compositionObj = response
    this.selected = index
  }.bind(this),
    error => this.errorMsg = error)
  }
}
