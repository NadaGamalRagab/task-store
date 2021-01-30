import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductServices } from 'src/app/_services/product.services';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})


export class ProductItemComponent implements OnInit, OnChanges {
    @Input() product: Product;
    
    constructor(private productServices: ProductServices) {
    }

    ngOnChanges(): void {
        // if (this.product.price < 5500) {
        //     this.product.data.name = "Ana Ahoo";
        // }
    }

    ngOnInit(): void {

    }

    getPrice(): number {
        return this.product.discount ? this.product.price - this.product.discount : this.product.price;
    }

    addToCart(): void {
        this.productServices.AddToCart.emit(this.product);
    }


}