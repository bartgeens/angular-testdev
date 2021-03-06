import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, DropDownsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
