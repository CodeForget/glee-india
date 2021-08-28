import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';

import { HeaderComponent } from '../../_shared/header/header.component';
import { FooterComponent } from '../../_shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    TabViewModule
   
  ]
})
export class ClientModule { }
