// import { createAction, props } from '@ngrx/store';

// export const loadCities = createAction(
//   '[City] Load Cities',
//   props<{ cities: string[] }>()
// );

// export const selectCity = createAction(
//   '[City] Select City',
//   props<{ city: string }>()
// );

import { createAction, props } from '@ngrx/store';
import { Place } from './../../core/models/place';

export const loadCities = createAction(
  '[City] Load Cities',
  props<{ cityName: string }>()
);

export const loadCitiesSuccess = createAction(
  '[City] Load Cities Success',
  props<{ cities: Place[] }>()
);

export const loadCitiesFailure = createAction(
  '[City] Load Cities Failure',
  props<{ error: string }>()
);

