import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetUserCommunitiesResponse, CommunityMembership } from '../dtos/community/my-community.response';

@Injectable({
  providedIn: 'root'
})
export class MyCommunityService {

  constructor(private http: HttpClient) { }


  public getUserCommunities(): Observable<GetUserCommunitiesResponse> {
    return this.http.get<GetUserCommunitiesResponse>(environment.baseUrl + 'community-memberships/user-communities')
      .pipe(map((response: GetUserCommunitiesResponse) => response)); 
  }

  public removeCommunityMembership(communityId: string): Observable<any> {
    console.log("Enviando solicitud para eliminar comunidad con ID:", communityId); // Log para confirmar ID
    return this.http.delete(`${environment.baseUrl}community-memberships/remove/${communityId}`);
  }
  
  

}
