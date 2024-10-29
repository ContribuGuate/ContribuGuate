import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  public extractData(res: any) {
    return res || {};
  }

  public getEvents() {
    return this.http.get(environment.baseUrl + 'event/all')
    .pipe(map(this.extractData))
  }
}
