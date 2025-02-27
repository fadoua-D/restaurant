import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MapModule } from '../map/map.module';  // Import du module Map
import { SearchModule } from '../search/search.module';  // Import du module Search



// const routes: Routes = [
//   { path: '', component: HomeComponent }
// ];


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    //RouterModule.forChild([{ path: '', component: HomeComponent }]),
    MapModule, 
    SearchModule,
    CoreModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
