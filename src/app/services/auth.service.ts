import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../dtos/response';
import { LoginResponse } from '../dtos/auth/login.response';

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
}
