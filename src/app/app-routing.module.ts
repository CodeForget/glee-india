import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './_shared/header/header.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home',
    loadChildren:()=>import('./_modules/client/client.module').then(m=>m.ClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
