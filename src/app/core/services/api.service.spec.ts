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


// it('should fetch data via HTTP', () => {
//     const cityName = 'Athis-Mons, Palaiseau, Essonne, Île-de-France, France métropolitaine, 91200, France';
//     const mockResponse: Place[] = [
//     {
//         place_id: 88121759,
//         lat: 48.709311400000004,
//         lon: 2.371708969629716,
//         category: 'amenity',
//         type: 'fast_food',
//         name: "McDonald's",
//         display_name: "McDonald's, Rue Camille Flammarion, Centre-Ville, Athis-Mons, Palaiseau, Essonne, France métropolitaine, 91200, France"
//       }
//     ];
  
  
//     const cityResponse: Place[] = [
//     {
//         lat: 48.7079028,
//         lon: 2.3890941,
//         display_name: "McDonald's, Rue Camille Flammarion, Centre-Ville, Athis-Mons, Palaiseau, Essonne, France métropolitaine, 91200, France"
//       }

//     ];
  
//     service.getCitiesByName(cityName).subscribe(data => {
//       expect(data).toEqual(cityResponse);
//     });
  
//     service.getAllRestaurants(cityName).subscribe(data => {
//       expect(data).toEqual(mockResponse);
//     });
  
//     // Vérifiez que la requête HTTP a bien été effectuée
  
  
//     const req = httpMock.expectOne(
//      `https://nominatim.openstreetmap.org/search?q=McDonald's%20Athis-Mons,%20Palaiseau,%20Essonne,%20%C3%8Ele-de-France,%20France%20m%C3%A9tropolitaine,%2091200,%20France&format=jsonv2&limit=10&addressdetails=1`
  
//     );
  
//     expect(req.request.method).toBe('GET');
//       req.flush({});  // Simuler la réponse

//     });




