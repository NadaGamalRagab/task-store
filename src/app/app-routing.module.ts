import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',redirectTo:'',pathMatch:'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'product', loadChildren :()=>import('./products/product.module').then(mod=>mod.ProductModule)},
  { path: 'login', component: LoginComponent },
  { path: '**', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules, scrollPositionRestoration:'top',useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
