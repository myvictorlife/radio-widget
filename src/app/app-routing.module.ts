import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadioComponent } from './radio/radio.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: RadioComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
