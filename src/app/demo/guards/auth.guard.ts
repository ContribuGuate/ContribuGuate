import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {

  const router: Router = new Router();

  const token = localStorage.getItem('contribuguateToken');


  if(token) return true;
  else {
    router.navigate(['/']);
    return false;
  }
};
