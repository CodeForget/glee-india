import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
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
    ClientRoutingModule
  ]
})
export class ClientModule { }
