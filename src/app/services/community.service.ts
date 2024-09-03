import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetCommunitiesResponse } from '../dtos/community/getCommunities.response';
import { map } from 'rxjs';
import { GetCommunityResponse } from '../dtos/community/getCommunity.response';
import { JoinCommunityResponse } from '../dtos/community/joinCommunity.response';

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

  public join(uid: string, password?: string){
    return this.http.post(environment.baseUrl + 'community/join', {
      uuid: uid,
      password: password
    })
    .pipe<JoinCommunityResponse>(map(this.extractData));
  }

  public getLogo(uid: string){
    return this.http.get(environment.baseUrl + 'community/logo/'+uid, { responseType: 'blob' })
    .pipe(map(this.extractData));
  }

}
