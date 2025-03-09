import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CityActions from './city.actions';
import { ApiService } from './../../core/services/api.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CityEffects {
  constructor(private apiService: ApiService) {
  }

  private actions$ = inject(Actions);

  loadCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CityActions.loadCities),
      mergeMap(({ cityName }) =>
        this.apiService.getCitiesByName(cityName).pipe(
          map((cities) => CityActions.loadCitiesSuccess({ cities })),
          catchError((error) =>
            of(CityActions.loadCitiesFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
