import { createReducer, on } from '@ngrx/store';
import * as CityActions from './city.actions';
import { Place } from './../../core/models/place';

export interface CityState {
  cities: Place[];
  error: string | null;
}

export const initialState: CityState = {
  cities: [],
  error: null,
};

export const cityReducer = createReducer(
  initialState,
  on(CityActions.loadCitiesSuccess, (state, { cities }) => ({
    ...state,
    cities,
    error: null,
  })),
  on(CityActions.loadCitiesFailure, (state, { error }) => ({
    ...state,
    cities: [],
    error,
  }))
);
