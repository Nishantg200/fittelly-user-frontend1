import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  const token = cookieService.get('token');
  // const token = localStorage.getItem('token');
  console.log("token", token)
  return true;

  // if (token) {
  //   return true;
  // } else {
  //   alert("Session is expired ! please login again")
  //   router.navigateByUrl('/login')
  //   return false;
  // }

};

