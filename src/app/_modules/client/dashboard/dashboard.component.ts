import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../_core/_services/products.service';
import { Product } from '../../../_core/_models/product';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: Product[];
  responsiveOptions;
    constructor(private productService: ProductsService) {
      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    }


  ngOnInit(): void {
    this.getAllProductList();
  }


  getAllProductList(){
    this.productService.getProducts().subscribe(data=>{
      debugger;
      console.log(data);
      this.products=data;
    });
  }
}
