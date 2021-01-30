import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './_model/product';
import { ProductServices } from './_services/product.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'mearn-app';
  currentPage: string;

  constructor(private productService: ProductServices) { }

  ngDoCheck() {
    this.currentPage = this.productService.currentPage;
  }
}
