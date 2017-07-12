import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'train-composition',
  templateUrl: './app.train.composition.component.html',
  styleUrls: ['./app.component.css'],
})

export class TrainCompositions implements OnInit{
  @Input() columns: any; 
  ngOnInit() {
  }
}