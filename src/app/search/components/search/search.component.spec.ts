import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient} from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';  // Importer provideHttpClientTesting
import { ApiService } from '../../../core/services/api.service';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: ApiService;
  let httpMock: HttpTestingController;  // HttpTestingController pour intercepter les requêtes HTTP


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports:[ReactiveFormsModule],
      providers: [
        ApiService,
        provideHttpClient(),
        provideHttpClientTesting(),  // Utiliser provideHttpClientTesting pour fournir HttpClient dans les tests
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ApiService);  // Injecter ApiService
    httpMock = TestBed.inject(HttpTestingController);  // Injecter HttpTestingController
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should fetch data via HTTP', () => {
  //   service.getData().subscribe(data => {
  //     expect(data).toBeTruthy();
  //   });

  //   // Vérifier l'appel HTTP
  //   const req = httpMock.expectOne('https://api.example.com/data');
  //   expect(req.request.method).toBe('GET');
  //   req.flush({});  // Simuler la réponse
  // });

  // afterEach(() => {
  //   httpMock.verify();  // Vérifier qu'aucune requête n'est en attente
  // });

});
