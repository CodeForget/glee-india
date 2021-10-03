import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { ProductsService } from '../../../_core/_services/products.service';
import { Product } from '../../../_core/_models/product';
import {Varient} from '../../../_core/_models/varient.model';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit, AfterViewInit {

  pId: number;
  product: Product;
  pVarient:Varient;
  varient:Varient[];
  private param$:any;

  constructor(
    private productService: ProductsService, 
    private route: ActivatedRoute) {

  }



  ngOnInit(): void {

    this.param$=this.route.params.subscribe(params => {
      debugger;
      this.pId = +params['id'];
      this.getProductDetails(+params['id']);
    });
  }
  
  ngAfterViewInit() {

  }

  getProductDetails(param) {

    let productDetails$ = this.productService.getProductDetails(param);
    let varient$ = this.productService.getProductVarient(param);

   this.param$= forkJoin([productDetails$,varient$]).subscribe(results => {
      debugger;
      console.log(results);
      this.product = results[0];
      this.varient=results[1];
      this.pVarient=this.varient[0];
      
    });
  }

  changeImage(element) {
    debugger;
    var main_prodcut_image = document.getElementById('main_product_image') as HTMLImageElement;
    console.log(element);
    main_prodcut_image.src = element.currentTarget.src;
  }

  onCakeChange(index){
    this.pVarient=this.varient[index];
  }

  ngOnDestroy() {
    this.param$.unsubscribe();

  }
}
