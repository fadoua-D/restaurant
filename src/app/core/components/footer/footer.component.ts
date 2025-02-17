import { Component , Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { RestaurantService } from '../../../core/services/restaurant.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnChanges{
  constructor(private restaurantService: RestaurantService) {}

  //@Input() restaurantDetails: any = ''; // Ville reçue du parent

  restaurantDetails: any;

  ngOnInit(): void {
    // Souscrire aux détails du restaurant
    this.restaurantService.selectedRestaurant$.subscribe((details) => {
      this.restaurantDetails = details;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['restaurantName']) {
      console.log(this.restaurantDetails);
    }
  }

}
