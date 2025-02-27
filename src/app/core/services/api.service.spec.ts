import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

import { provideHttpClient} from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing'; 
import { Place } from './../models/place';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  const baseUrl = 'https://nominatim.openstreetmap.org/search';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
              ApiService,
              provideHttpClient(),
              provideHttpClientTesting(),  // Utiliser provideHttpClientTesting pour fournir HttpClient dans les tests
            ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve cities by name', () => {
    const cityName = 'Paris';
    const mockResponse: Place[] = [
      { display_name: 'Paris, France',
        place_id: 88121759,
        lat: 48.709311400000004,
        lon: 2.371708969629716,
        category: 'amenity',
        type: 'fast_food',
        name: "McDonald's",
      },
    
    ];

    service.getCitiesByName(cityName).subscribe((places) => {
        expect(places.length).toBe(1);
        expect(places).toEqual(mockResponse);
      });
      
    
      const req = httpMock.expectOne((request) => {
        const params = request.params;
        return (
          request.method === 'GET' &&
          request.url === baseUrl &&
          params.has('q') &&
          params.get('q') === cityName &&
          params.has('format') &&
          params.get('format') === 'jsonv2'
        );
      });
      req.flush(mockResponse);
  });

  it('should retrieve restaurants by city name', () => {
    const cityName = "Paris";
    const mockResponse: Place[] = [
      { display_name: "Restaurant 1, Paris, France",
        place_id: 88121759,
        lat: 48.709311400000004,
        lon: 2.371708969629716,
        category: 'amenity',
        type: 'fast_food',
        name: "McDonald's"
      },
      { display_name: "Restaurant 2, Paris, France",
        place_id: 88121759,
        lat: 48.709311400000004,
        lon: 2.371708969629716,
        category: 'amenity',
        type: 'fast_food',
        name: "McDonald's"
      }
    ];
  
    service.getAllRestaurants(cityName).subscribe((places) => {
      expect(places).toEqual(mockResponse);
    });
  
    const req = httpMock.expectOne((request) => {
      const params = request.params;
      return (
        request.method === 'GET' &&
        request.url === 'https://nominatim.openstreetmap.org/search' &&
        params.get('q') === `McDonald's ${cityName}` &&
        params.get('format') === 'jsonv2' &&
        params.get('limit') === '10' &&
        params.get('addressdetails') === '1'
      );
    });
  
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should retrieve city coordinates', () => {
    const cityName = "Paris";
    const mockResponse: Place[] = [
        { display_name: 'Paris, France',
          place_id: 88121759,
          lat: 48.709311400000004,
          lon: 2.371708969629716,
          category: 'amenity',
          type: 'fast_food',
          name: "McDonald's",
        },
      
      ];
  
      service.getCityCoordinates(cityName).subscribe((places) => {
          expect(places).toEqual(mockResponse);
        });
        
      
        const req = httpMock.expectOne((request) => {
          const params = request.params;
          return (
            request.method === 'GET' &&
            request.url === baseUrl &&
            params.has('q') &&
            params.get('q') === cityName &&
            params.has('format') &&
            params.get('format') === 'json' &&
            params.has('addressdetails') &&
            params.get('addressdetails') === '1' &&
            params.get('limit') === '1'

          );
        });
        req.flush(mockResponse);
        
  })
  

  
});


