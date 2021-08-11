import { Component, OnInit } from '@angular/core';
import { Countries } from '../models/countries.model';
import { Country } from '../models/country.model';
import { CountryService } from '../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  public selectedCountry: string = '';

  constructor(private myCountrieService: CountryService) {}
  public get countries(): Country[] {
    return this.myCountrieService.countries.data.filter(
      (con: Country) =>
        con.name.toLowerCase().includes(this.selectedCountry.toLowerCase()) ||
        con.capital.toLowerCase().includes(this.selectedCountry.toLowerCase())
    );
  }

  ngOnInit(): void {}
}
