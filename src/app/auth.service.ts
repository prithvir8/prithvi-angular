import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private rootfalse:Router) { }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let loggedin=true;

    if(loggedin){
      return true
    }
    else {
      this.rootfalse.navigate(['/login'])
    }
}
}
