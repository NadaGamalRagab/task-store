import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product'
import { ProductServices } from 'src/app/_services/product.services';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products: Product[]
  pageNumbers: number[] = [];
  pageSize: number = 9;
  currentPage: number = 0;

  constructor(private productServices: ProductServices) {

  }

  ngOnInit(): void {
    //this.products = this.productServices.getAllProducts();
    console.log(this.productServices.getAllProducts().subscribe(
      (response) => {
        console.log(response['product'] )
        console.log(response['numberOfProducts']);
        this.products = response['product'];
        this.calculateNumberOfPages(response['numberOfProducts']);

      },
      (error) => {console.log(error) },
      () => { }

    )
    );
  }

  calculateNumberOfPages(length) {
    this.pageNumbers = []; 
    for (let index = 0; index <length / this.pageSize; index++) {
      this.pageNumbers.push(index + 1);
    }
  }

  firing(word) {
    alert(word);
  }

  getProductSlice() {
    const start = this.currentPage * this.pageSize;
    return this.products.slice(
      start,
      start + this.pageSize
    )
  }

  onSearchHandler(searchInput) {
    console.log(searchInput.value);
    this.products = this.productServices.searchByName(searchInput.value);
    if (this.products.length <= 9) {
      this.currentPage = 0;
    } else {
      this.currentPage = 0;
    }
   // this.calculateNumberOfPages();
  }
}
