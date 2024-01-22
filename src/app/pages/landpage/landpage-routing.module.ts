import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectsComponent } from './proyects/proyects.component';

const routes: Routes = [
  {
    path:'proyects',
    component: ProyectsComponent
  },
  {
    path: '',
    component: ProyectsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandpageRoutingModule { }
