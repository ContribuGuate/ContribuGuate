import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthGuard implements CanActivate {
     constructor(private router: Router) {}
     canActivate(): boolean {
       if (localStorage.getItem('contribuguateToken')) {
         return true; // Allow access to the route
       } else {
         // Redirect to the login page
         this.router.navigate(['/auth/login']);
         return false;
       }
     }
   }