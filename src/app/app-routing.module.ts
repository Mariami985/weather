import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/lending',
    pathMatch: 'full'
  }, 
  {
    path:'home',
    loadChildren: () => import ('./home/home.module').then (item => item.HomeModule)
  },
  {
    path:'lending',
    loadChildren: () => import ('./lending/lending.module').then (item => item.LendingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
