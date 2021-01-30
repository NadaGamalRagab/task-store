import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private authService: AuthService, private myRoute: Router) { }
  // canActivate(route, state) {
  //   return this.authService.isAuthenticated();  
  // }


  canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
if(this.authService.isAuthenticated()){
  return true;
}else{
  this.myRoute.navigate(["product"]);
  return false;
}
  }



}
