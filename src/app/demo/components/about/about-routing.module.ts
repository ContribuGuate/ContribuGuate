import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsComponent } from './us/us.component';

const routes: Routes = [
  {
    path: '',
    component: UsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
