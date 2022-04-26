import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TariffsPageComponent } from './pages/tariffs-page/tariffs-page.component';

const routes: Routes = [
  {
    path: '',
    component: TariffsPageComponent
  },
  {
    path: 'home',
    component: TariffsPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
