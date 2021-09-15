import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'home/main', 
    pathMatch:'full' 
    },
  {
    path:'home',
    loadChildren:()=>import('./_modules/client/client.module').then(m=>m.ClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
