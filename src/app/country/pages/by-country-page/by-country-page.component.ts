import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
  
})
export class ByCountryPageComponent {

  //inject service
  countryService = inject(CountryService);

  //build a resource
  query = signal('');

  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async({ request })=>{
      if(!request.query) return [];

      return await firstValueFrom(
        this.countryService.searchByCountry(request.query)
      );
    },
  });

 }
