import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  private selectedRestaurantSource = new BehaviorSubject<any>(null); // Par défaut, aucun restaurant
  selectedRestaurant$ = this.selectedRestaurantSource.asObservable();

  sendRestaurantDetails(details: any) {
    this.selectedRestaurantSource.next(details); // Émet les détails du restaurant
  }
}
