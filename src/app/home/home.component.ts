import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sharedObject: any; // Stocke l'objet reçu avec les infos sur la ville
  restaurants: any[] = []; // Liste des restaurants à transmettre à MapComponent

  selectedRestaurant: any; // Stocke le restaurant sélectionné


  receiveObject(obj: any): void {
    this.sharedObject = obj; // Mettre à jour l'objet partagé
  }

  updateRestaurants(restaurants: any[]): void {
    this.restaurants = restaurants; // Met à jour la liste des restaurants
  }

  onRestaurantSelected(resto: string): void {
    this.selectedRestaurant = resto; // Met à jour le resto à chaque sélection
  }

}
