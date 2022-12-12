import { Component } from '@angular/core';

interface Item {
  name: string,
  description: string,
  price: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemsForSale: Item[] = [
    { name: 'Pencils', description: 'a box of 12 basic #2 pencils', price: 2.49 },
    { name: 'Crayons', description: 'a box of 48 crayons with sharpener', price: 4.99 },
    { name: 'Erasers', description: 'a package of 3 large pink erasers', price: 1.29 },
  ];

  invalidData: boolean = true;

  loaded: boolean = false;

  loadingMessage: string = 'Please wait while we gather your information...';

}
