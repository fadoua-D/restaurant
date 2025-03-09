import { CityState } from './city/city.state';
import { RestaurantState } from './restaurant/restaurant.state';

export interface AppState {
  cities: CityState;
  restaurants: RestaurantState;
  restaurant: {
    selectedRestaurant: string | null;
  };
}
