import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from '../models/countries.model';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  public _countries: Countries | any;

  constructor(private myHttpClient: HttpClient) {
    this._countries = {};
    this.getCountries();
  }

  public get countries() {
    return this._countries;
  }

  public getCountries() {
    this.myHttpClient
      .get<Country[]>('https://restcountries.eu/rest/v2/all')
      .subscribe(
        (res) => {
          this._countries.data = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
