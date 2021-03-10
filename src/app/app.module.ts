import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { directiveComp } from './directiveDemo.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent , directiveComp],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
