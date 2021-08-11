import { Component } from '@angular/core';
import { Countries } from '../models/countries.model';
import { Country } from '../models/country.model';
import { CountryService } from '../services/countries.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private myCountriesService: CountryService) {}

  public get myCountry(): Country {
    return this.myCountriesService.countries;
  }

  // func arr.contains() to find with (onchange)=func() [ngModel]="selectedCountry"
}
