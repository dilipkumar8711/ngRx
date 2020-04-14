import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {} from '../app/customers/customers.module'

const routes: Routes = [
  {path:"", component:HomeComponent},
  {
    path:"customers",
    loadChildren:"../app/customers/customers.module#CustomersModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
