import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductlistComponent} from './productlist/productlist.component'
import {ProductdetailsComponent} from './productdetails/productdetails.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'productlist',
        component:ProductlistComponent
      },
      {
        path:'productdetails/:id',
        component:ProductdetailsComponent
      }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
