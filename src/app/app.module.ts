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

import { Actions, EffectsModule } from '@ngrx/effects';
import { cityReducer } from './store/city/city.reducer';
import { CityEffects } from './store/city/city.effects';

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
      restaurant: restaurantReducer,
      city: cityReducer 
    },
  ),
    EffectsModule.forRoot([CityEffects]),
  //  EffectsModule.forRoot([RestaurantEffects]),
  //  EffectsModule.forFeature([RestaurantEffects]),
  ],
  providers: [ ApiService, RestaurantService, Actions ],
  bootstrap: [AppComponent]
})
export class AppModule { }
