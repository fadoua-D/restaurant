import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ApiService } from './core/services/api.service';
import { RestaurantService } from './core/services/restaurant.service';

import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';  // Import du module de routing



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [ ApiService, RestaurantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
