import { Injectable} from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { Place } from '../models/place';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    baseUrl: string = 'https://nominatim.openstreetmap.org/search';
    
    
    constructor(private httpClient : HttpClient) {}
    
    // Fonction permettant de récupérer les villes à partir du nom passer en paramètre
    getCitiesByName(cityName: string): Observable<Place[]>{
      const params = new HttpParams()
        .set('q', `${cityName}`)
        .set('format', 'jsonv2')
        .set('countrycodes', 'FR') // limiter la recherche en France 

      return this.httpClient.get<Place[]>(this.baseUrl, { params });
    }
    
    // Fonction permettant de récupérer les restaurants McDoDonald's de la ville passer en param
    getAllRestaurants(cityName: string): Observable<Place[]> {
      const params = new HttpParams()
        .set('q', `McDonald's ${cityName}`)
        .set('format', 'jsonv2')
        .set('limit', '10')
        .set('addressdetails', '1');
    
      //console.log('Params:', params.toString());
      const url = `${this.baseUrl}?${params.toString()}`;
      console.log('URL generated:', url);  //  Affiche l'URL pour la comparer au test

    
      return this.httpClient
        .get<Place[]>(this.baseUrl, { params })
        .pipe(
          tap((data) => console.log('Data received:', data)),
          catchError((error) => {
            console.error('Error fetching restaurants:', error);
            return throwError(() => new Error('Failed to fetch restaurants'));
          })
        );
    }
    
    // Fonction permettant de récupérer les détails sur la ville (les coordonnées)
    getCityCoordinates(cityName: string) {
      const params = new HttpParams()
        .set('q', cityName)
        .set('format', 'json')
        .set('addressdetails', '1')
        .set('limit', '1'); // Limiter la recherche à 1 résultat
  
      return this.httpClient.get<any>('https://nominatim.openstreetmap.org/search', { params });
    }
     


}