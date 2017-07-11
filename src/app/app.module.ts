import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainCompositions } from './app.train.composition.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TrainCompositions 
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
