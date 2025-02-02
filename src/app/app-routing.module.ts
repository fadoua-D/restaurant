import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: '', component: HomeComponent }
  //{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })], // Activation preloadingStrategy dans AppRoutingModule pour améliorer le chargement
  exports: [RouterModule]
})
export class AppRoutingModule { }
