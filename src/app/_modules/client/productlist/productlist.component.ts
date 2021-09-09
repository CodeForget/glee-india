import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../_core/_services/products.service';
import { Product } from '../../../_core/_models/product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Product[];

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

  constructor(
    private productService: ProductsService, 
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    debugger;
    this.productService.getProductsSmall().then(data => {
			this.products = data;
      debugger;
		});
    
        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];
        debugger;
        this.primengConfig.ripple = true;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
