import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClientModule } from './_modules/client/client.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
