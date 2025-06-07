import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',

})
export class SearchInputComponent {

  //signal to implement
  placeholder = input('Buscar');

  value = output<string>();


 }
