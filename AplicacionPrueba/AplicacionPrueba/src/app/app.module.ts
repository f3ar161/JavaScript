import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MasterURlService} from "./services/master-url.service";
import { HomeComponent } from './home/home.component';

// DECORATOR
// @Decorator({asd:"asd"})
// @Primary({})
// @Politecnica({asda:"asdasd"})

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MasterURlService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



