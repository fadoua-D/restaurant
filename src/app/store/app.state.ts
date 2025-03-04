import { RestaurantState } from './restaurant/restaurant.state';

export interface AppState {
  restaurants: RestaurantState;
  restaurant: {
    selectedRestaurant: string | null;
  };
}
