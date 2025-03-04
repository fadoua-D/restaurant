import { Component , Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { RestaurantService } from '../../../core/services/restaurant.service';

import { Store, select } from '@ngrx/store';
import { AppState } from './../../../store/app.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnChanges{

  selectedRestaurant$: Observable<string | null>;
  constructor(private restaurantService: RestaurantService,  private store: Store<AppState>) {
    this.selectedRestaurant$ = this.store.pipe(select(state => state.restaurant?.selectedRestaurant));
  }

  //@Input() restaurantDetails: any = ''; // Ville reçue du parent

  restaurantDetails: any;

  ngOnInit(): void {
    // Souscrire aux détails du restaurant
    // this.restaurantService.selectedRestaurant$.subscribe((details) => {
    //   this.restaurantDetails = details;
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['restaurantName']) {
      console.log(this.restaurantDetails);
    }
  }

}
