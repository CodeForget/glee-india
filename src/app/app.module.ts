import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CoreModule } from './_core/core.module';
import { ClientModule } from './_modules/client/client.module'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {RequestInterceptor} from './_core/_interceptors/request.interceptor';

import { AppComponent } from './app.component';


import { ProductsService } from './_core/_services/products.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ClientModule,
    AppRoutingModule,
  ],
  providers: [ProductsService,
  {provide:HTTP_INTERCEPTORS ,useClass:RequestInterceptor,multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
