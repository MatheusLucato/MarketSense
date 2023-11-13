import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  adminRoute: string[] = ['usuarios/listar']
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(route.routeConfig?.path != undefined){
      if(this.adminRoute.includes(route.routeConfig?.path) && this.authService.obterAdminAutenticacao() == "false"){
        this.router.navigate(['/']);
        return false;
      }
    }
      

    if (this.authService.verificarChaveAutenticacao()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
