import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductServices } from 'src/app/_services/product.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  cartArray: Product[] = [] ; //Comesfrom product item > Header
  cartClicked: boolean = false;

  constructor(private productServices: ProductServices) {
  }


  ngOnInit(): void {
    this.productServices.AddToCart.subscribe(
      (res) => {
        this.cartArray.push(res);
      },
      (err) => {
        console.error(err);
      },
      (completed) => {
        alert("finished");
      }

    );  
  }

  ngOnChanges(changes) {
    console.log(this.cartArray);
  }

  getPrice(product: Product) {
    return product.discount ? product.price - product.discount : product.price;
  }

  getTotal() {
    let sum: number = 0;
    for (let item of this.cartArray)
      sum += this.getPrice(item);
    return sum;
    
  }

  clickedToggel(): void {
    this.cartClicked = !this.cartClicked;
  }

  changeCurrentPage(dist:string){
    this.productServices.currentPage = dist;
  }
}
