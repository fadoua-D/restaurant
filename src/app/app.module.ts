import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { MapModule } from './map/map.module';  // Import du module Map
import { SearchModule } from './search/search.module';  // Import du module Search
//import { FooterComponent } from './core/components/footer/footer.component';
import { ApiService } from './core/services/api.service';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    //FooterComponent // Déclare le footer ici si nécessaire
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MapModule, // Ajout du module contenant MapComponent
    SearchModule // Ajout du module contenant SearchComponent
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
