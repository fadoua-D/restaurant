import { Component, OnInit,ElementRef, ViewChild, EventEmitter, Output, ChangeDetectorRef} from '@angular/core';
import {  FormControl, Validators} from '@angular/forms'
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Place } from '../../../core/models/place';



@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  //exportAs: 'searchPlace'
})

export class SearchComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  public city: FormControl = new FormControl('', [Validators.required]);
  public cityAdress: string = '';
  cities$! : Observable<Place[]> ;
  @ViewChild('cityAdress') elRef!:ElementRef;

  @Output() restaurantsEmit = new EventEmitter<any[]>(); // Émetteur pour transmettre les restaurants
  @Output() cityInfoEmitted = new EventEmitter<any>(); // Événement pour envoyer l'objet
  //restaurants$! : Observable<Place[]> ;
  public restaurants : Place[] = [];
  public macDonalds : Place[] = [];


 

  ngOnInit(): void {

  }

  recupererVille(e:KeyboardEvent){
    e.preventDefault();
    this.cities$ = this.apiService.getCitiesByName(this.city.getRawValue());
  }

  onSelected(value:string): void {
		this.cityAdress = value;
    this.city.setValue(`${this.cityAdress}`); // Ou patchValue
    this.elRef.nativeElement.className="collapse";
	}

  restaurantList(e:Event){
    e.preventDefault();
    // Récupérer les détails de la ville sélectionné dans la liste des choix
    this.apiService.getCityCoordinates(this.city.getRawValue()).subscribe(data => {
      if (data && data[0]) {
        // Extraire le nom la latitude et la longitude de la réponse
        const cityInfo = {
          cityName: data[0].display_name,
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon)
        };

        console.log("Envoi des infos de la ville :", cityInfo);

        this.cityInfoEmitted.emit(cityInfo); // Émettre l'objet avec les détails sur la ville à l'appComponent
      }
    });

    // Récupérer la liste des restaurants MacDonals de la ville
    this.apiService.getAllRestaurants(this.city.getRawValue())
    .subscribe((result) => {
      this.restaurants = result;
        // Émet les restaurants vers le appComponent
        this.restaurantsEmit.emit(result);
        //this.cdr.detectChanges(); // Forcer la mise à jour

    }) 
    
  }
  




}
