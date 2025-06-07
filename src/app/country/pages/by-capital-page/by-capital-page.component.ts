import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';
import { CountryMapper } from '../../components/mappers/country.mapper';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  
})
export class ByCapitalPageComponent { 

  //inject service
  countryService = inject(CountryService);


  //load the data with signals
  isLoading = signal(false)
  isError = signal<string| null>(null)
  countries = signal<Country[]>([])


  onSearch(query: string){
    this.countryService.searchByCapital(query)
      .subscribe( (countries) =>{
        this.isLoading.set(false);
        this.countries.set(countries);

        //mapper

       // const c = CountryMapper.mapRestCountryArrayToCountryArray(countries);

        console.log(countries);
      })
  }
}
