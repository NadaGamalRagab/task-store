import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { paymentTypes } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { productCategory } from 'src/app/_model/product-category';
import { PaymentService } from 'src/app/_services/payment-types.services';
import { productCategoryService } from 'src/app/_services/product-category.services';
import { ProductServices } from 'src/app/_services/product.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  paymentTypes: paymentTypes[] = [];
  ProductCategory: productCategory[] = [];
  noSale: boolean;
  product = { data: [{}], paymentTypes: [], category: {}, tages: [] };
  editMode: boolean;
  constructor(
    private productService: ProductServices,
    private paymentService: PaymentService,
    private productCategoryService: productCategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }


  ngOnInit(): void {
    this.editMode = this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === 'edit';
    if (this.editMode) {
      const id = parseInt(this.activatedRoute.snapshot.params.id, 10);
      this.productService.getProductById(id).subscribe(
        (response) => { this.product=response['product']},
        (error)=>{},
        () => { },

      )
    }
    this.paymentTypes = this.paymentService.getAllPayment();
    this.ProductCategory = this.productCategoryService.getAllProductCategory();
  }


  onCheckBoxPressed(index) {
    //alert(index);
  }

  nodiscount() {
    this.noSale = true;
  }

  onTagAdded(tagInput) {
    this.product.tages.push({ name: tagInput.value });
    tagInput.value = '';
  }

  addProduct(form) {
    for (let index = 0; index < this.paymentTypes.length; index++) {
      if (form.value['check_' + index]) {
        this.product.paymentTypes.push(this.paymentTypes[index]);
      }
    }
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['product'])
      },
      (error) => {
        console.log(error);
      },
      () => { }

    );
    console.log(this.product);
    console.log(form.value);
  }

  deletTag(index) {
    this.product.tages.splice(index, 1);
  }
  deletAllTages() {
    this.product.tages.splice(0, this.product.tages.length);
  }
}
