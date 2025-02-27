import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './components/map/map.component';
import { MapRoutingModule } from './map-routing.module';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    MapRoutingModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
