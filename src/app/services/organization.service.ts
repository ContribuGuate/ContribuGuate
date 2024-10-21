import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetOrganizationsResponse } from '../dtos/organization/get-organizations.response';
import { registeremp } from '../dtos/organization/registeremp.response';
@Injectable()
export class OrganizationService {

  constructor(private http: HttpClient) { }

  public extractData(res: any) {
    return res || {};
  }

  public getOrganizations() : Observable<any> {
    return this.http.get(environment.baseUrl + 'organization/all')
    .pipe<GetOrganizationsResponse>(map(this.extractData))
  }

  public registerEmp(organizationData: any) {
    return this.http.post(environment.baseUrl + 'organization/add', organizationData)
      .pipe<registeremp>(map(this.extractData));
  }
}
