import { Component, OnInit,Inject, AfterViewInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
// import { WINDOW } from '../../../_core/_services/window.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit,AfterViewInit {

  constructor( private renderer: Renderer2) {

  }

@ViewChild('scroll') element:ElementRef;

  ngOnInit(): void {
   // window.addEventListener('scroll', this.scrollEvent, true);
  }
  ngAfterViewInit() {

    // let el = this.element.nativeElement;
    // this.renderer.setStyle(el, 'color', 'white');
    // this.renderer.setStyle(el, 'background', 'red');

  }

  ngOnDestroy() {
   // window.removeEventListener('scroll', this.scrollEvent, true);
  }
  // scrollEvent = (event: any): void => {
  //   const n = event.srcElement.scrollingElement.scrollTop;
  // }

  changeImage(element) {
    debugger;
    var main_prodcut_image = document.getElementById('main_product_image') as HTMLImageElement;
    console.log(element);
    main_prodcut_image.src = element.currentTarget.src;
  }
}
