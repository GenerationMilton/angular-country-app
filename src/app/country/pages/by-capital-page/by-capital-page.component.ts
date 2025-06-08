import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  
})
export class ByCapitalPageComponent { 

  //inject service
  countryService = inject(CountryService);

  //build a resource
  query = signal('');

  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async({ request })=>{
      if(!request.query) return [];

      return await firstValueFrom(
        this.countryService.searchByCapital(request.query)
      );
    },
  });

  //take the first value of observable as an promise

  //load the data with signals
  // isLoading = signal(false)
  // isError = signal<string| null>(null)
  // countries = signal<Country[]>([])


  // onSearch(query: string){
  //   this.countryService.searchByCapital(query)
  //     .subscribe( {
  //       next: (countries) => {
         
  //       this.isLoading.set(false);
  //       this.countries.set(countries);

  //       },
  //       error: (err) =>{
  //         this.isLoading.set(false);
  //         this.countries.set([]);
  //         this.isError.set( err);
  //       },
  //     });
  // }
}
