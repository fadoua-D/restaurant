import { TestBed } from '@angular/core/testing';
import { provideHttpClient} from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from "./api.service";
import { Place } from '../models/place';

describe("ApiService", () => {
  let service: ApiService;
  let httpMock: HttpTestingController; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService,
        provideHttpClientTesting(), provideHttpClient() ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  it('should fetch data via HTTP', () => {
  
  const cityName = 'Athis-Mons, Palaiseau, Essonne, Île-de-France, France métropolitaine, 91200, France';
  const mockResponse: Place[] = [
    {
      place_id: 88121759,
      lat: 48.709311400000004,
      lon: 2.371708969629716,
      category: 'amenity',
      type: 'fast_food',
      name: "McDonald's",
      display_name: "McDonald's, Rue Camille Flammarion, Centre-Ville, Athis-Mons, Palaiseau, Essonne, France métropolitaine, 91200, France"
    }
  ];
  // const cityResponse: Place[] = [
  //   {
  //     lat: 48.7079028,
  //     lon: 2.3890941,
  //     display_name: "McDonald's, Rue Camille Flammarion, Centre-Ville, Athis-Mons, Palaiseau, Essonne, France métropolitaine, 91200, France"
  //   }
  // ];
  // service.getCitiesByName(cityName).subscribe(data => {
  //   expect(data).toEqual(cityResponse);
  // });

  service.getAllRestaurants(cityName).subscribe(data => {
    expect(data).toEqual(mockResponse);
  });

    // Vérifiez que la requête HTTP a bien été effectuée
    const req = httpMock.expectOne(
      `https://nominatim.openstreetmap.org/search?q=McDonald's%20Athis-Mons,%20Palaiseau,%20Essonne,%20%C3%8Ele-de-France,%20France%20m%C3%A9tropolitaine,%2091200,%20France&format=jsonv2&limit=10&addressdetails=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush({});  // Simuler la réponse
  });

  afterEach(() => {
    httpMock.verify();  // Vérifier qu'aucune requête n'est en attente
  });

});
