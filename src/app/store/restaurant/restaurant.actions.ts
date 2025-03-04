import { createAction, props } from '@ngrx/store';

export const loadRestaurants = createAction(
  '[Restaurant] Load Restaurants', 
  props<{ cityName: string }>() // Action qui reçoit la ville comme paramètre
);

export const loadRestaurantsSuccess = createAction(
  '[Restaurant] Load Restaurants Success',
  props<{ restaurants: any[] }>() // Action qui reçoit la liste des restaurants
);

export const loadRestaurantsFailure = createAction(
  '[Restaurant] Load Restaurants Failure',
  props<{ error: string }>() // Action qui reçoit l'erreur si elle se produit
);

// export const selectRestaurant = createAction(
//   '[Restaurant] Select Restaurant',
//   props<{ restaurant: any }>()
// );

export const selectRestaurant = createAction(
  '[Restaurant] Select Restaurant',
  props<{ restaurant: string }>()
);

export const clearSelectedRestaurant = createAction(
  '[Restaurant] Clear Selected Restaurant'
);

