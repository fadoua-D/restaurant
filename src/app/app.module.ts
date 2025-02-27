import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// import { CoreModule } from './core/core.module';
// import { MapModule } from './map/map.module';  // Import du module Map
// import { SearchModule } from './search/search.module';  // Import du module Search
//import { FooterComponent } from './core/components/footer/footer.component';
import { ApiService } from './core/services/api.service';
import { RestaurantService } from './core/services/restaurant.service';

//import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';  // Import du module de routing



@NgModule({
  declarations: [
    AppComponent
    //HomeComponent
    //FooterComponent // Déclare le footer ici si nécessaire
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    //CoreModule
  ],
  providers: [ ApiService, RestaurantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
