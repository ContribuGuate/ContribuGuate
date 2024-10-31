import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../dtos/auth/login.response';
import { jwtDecode } from 'jwt-decode';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public extractData(res: any) {
    return res || {};
  }

  public login(email: string, password: string, remember: boolean) {
    return this.http.post(environment.baseUrl + 'auth/login', { email, password, remember})
    .pipe<LoginResponse>(map(this.extractData))
  }


  public getProfile(){
    return this.http.get(environment.baseUrl + 'auth/profile')
    .pipe(map(this.extractData))
  }

  public getUserId(){
    const token = localStorage.getItem('contribuguateToken') ?? "";
    if(token){
      try{
        const decodedToken: any = jwtDecode(token);
        return decodedToken.sub || null;
      }catch(err){
        return null;
      }
    }
    return null;

  }

 
  
}
