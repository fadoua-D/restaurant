import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { MapComponent } from './components/map/map.component';
import { MapRoutingModule } from './map-routing.module';

//import { RouterModule, Routes } from '@angular/router';
//const routes: Routes = [{ path: '', component: MapComponent }];


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    CommonModule,
    MapRoutingModule
   // RouterModule.forChild(routes)
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
