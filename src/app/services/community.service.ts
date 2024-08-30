import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetCommunitiesResponse } from '../dtos/community/getCommunities.response';
import { map } from 'rxjs';
import { GetCommunityResponse } from '../dtos/community/getCommunity.response';

@Injectable()
export class CommunityService {

  constructor(private http: HttpClient) { }

  public extractData(res: any) {
    return res || {};
  }

  public getCommunities() {
    return this.http.get(environment.baseUrl + 'community/all')
    .pipe<GetCommunitiesResponse>(map(this.extractData))
  }

  public getOne(id: string){
    return this.http.get(environment.baseUrl + 'community/' + id)
    .pipe<GetCommunityResponse>(map(this.extractData))
  }

}
