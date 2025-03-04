import { createReducer, on } from '@ngrx/store';
import * as RestaurantActions from './restaurant.actions';


export interface RestaurantState {
  restaurants: any[];
  loading: boolean;
  error: string | null;
  selectedRestaurant: string | null;
}

export const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
  error: null,
  selectedRestaurant: null
};

export const restaurantReducer = createReducer(
  initialState,
  on(RestaurantActions.selectRestaurant, (state, { restaurant }) => ({
    ...state,
    selectedRestaurant: restaurant
  })),
  on(RestaurantActions.loadRestaurants, (state) => ({
    ...state,
    loading: true,
    error: null, // Reset error when loading starts
  })),
  on(RestaurantActions.loadRestaurantsSuccess, (state, { restaurants }) => ({
    ...state,
    loading: false,
    restaurants, // Save the fetched restaurants in the state
  })),
  on(RestaurantActions.loadRestaurantsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error, // Save error message in the state
  })),


);
