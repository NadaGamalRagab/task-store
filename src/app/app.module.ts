import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './products/header/header.component';
import { FooterComponent } from './products/footer/footer.component';
import { FormsModule } from '@angular/forms';
import {ProductServices} from './_services/product.services';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component'
import { PaymentService } from './_services/payment-types.services';
import { productCategoryService } from './_services/product-category.services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/dropdown/shared.module';
import { HomeComponent } from './home/home.component';
import { MyInterceptorService } from './_services/my-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ProductServices, PaymentService, productCategoryService,
  {provide:HTTP_INTERCEPTORS,useClass:MyInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
