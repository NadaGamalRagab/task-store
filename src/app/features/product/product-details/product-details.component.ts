import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { ProductServices } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  relatedProduct: Product[]=[];
  constructor(
    private productService: ProductServices,
    private activatedRout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id;
   // this.relatedProduct = this.productService.getAllProducts().slice(3, 7);
    this.activatedRout.params.subscribe(
      (params) => {
        id = params.id;
        this.productService.getProductById(id).subscribe(
          (response) => {
            console.log(response);
            this.product = response;

          },
          (error) => { 
            console.log(error);
          },
          () => { }

        );
        this.productService.getAllProducts().subscribe(
          (response) => {
            this.relatedProduct = response['product'].slice(4, 8);
           },
          (error) => {console.log(error) },
          () => { },
        )

      },
      (error) => {
        console.log(error);
      },
      () => { }
    );  
    // const id = this.activatedRout.snapshot.params.id;
  }

}
