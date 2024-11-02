import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  public addEvent(form: any) : Observable<any>{
    var body = {
      name: form.name,
      description: form.description,
      address: form.address,
      date: form.date,
      link: form.link,
      image: form.image,
      community: form.community.uuid
    }
    return this.http.post(environment.baseUrl + 'event/add', body)
    .pipe(map(this.extractData))
  }
}
