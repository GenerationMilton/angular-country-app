import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'country-page',
  imports: [],
  templateUrl: './country-page.component.html',

})
export class CountryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    loader:  ({ params }) => {
      return  this.countryService.searchCountryByAlphaCode(params.code);
    },
  })


 }
