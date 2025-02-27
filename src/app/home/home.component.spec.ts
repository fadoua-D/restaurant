import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { MapModule } from '../map/map.module';
import { SearchModule } from '../search/search.module';
import { provideHttpClient} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CoreModule } from '../core/core.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports:[MapModule, SearchModule, CoreModule],
      providers: [
        provideHttpClientTesting(), provideHttpClient() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
