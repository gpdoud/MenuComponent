import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import * as menu from './menu';
// import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent
    ,menu.MenuComponent
  ],
  imports: [
    BrowserModule
    // ,MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
