import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ApiService } from './core/services/api.service';
import { RestaurantService } from './core/services/restaurant.service';

import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';  // Import du module de routing


import { StoreModule } from '@ngrx/store';
import { restaurantReducer } from './store/restaurant/restaurant.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    AppRoutingModule,
    StoreModule.forRoot({
      restaurant: restaurantReducer
    }),
  //  EffectsModule.forRoot([RestaurantEffects]),
  //  EffectsModule.forFeature([RestaurantEffects]),
  ],
  providers: [ ApiService, RestaurantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
