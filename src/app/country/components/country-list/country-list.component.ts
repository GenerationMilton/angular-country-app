import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink, RouterLinkActive],
  templateUrl: './country-list.component.html'
})
export class CountryListComponent {

    countries = input.required<Country[]>()
 }
