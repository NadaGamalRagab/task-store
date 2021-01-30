import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AddProductComponent } from "../features/product/add-product/add-product.component";
import { ProductDetailsComponent } from "../features/product/product-details/product-details.component";
import { StringPipePipe } from "../pipes/string-pipe.pipe";
import { AuthGuardService } from "../_services/auth-guard.service";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductListingComponent } from "./product-listing/product-listing.component";

@NgModule({
    declarations: [
        ProductItemComponent,
        ProductListingComponent,
        AddProductComponent,
        ProductDetailsComponent,
        StringPipePipe,

    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', children: [
                    { path: '', component: ProductListingComponent },
                    { path: 'add', component: AddProductComponent ,canActivate:[AuthGuardService] },
                    { path: 'edit/:id', component: AddProductComponent },
                    { path: 'detail/:id', component: ProductDetailsComponent },
                ]
            },
        ])
    ],
    providers: [],
    exports: []
})
export class ProductModule { }