import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetUserHistoryResponse, HistoryEntry } from '../dtos/history/get-user-history.response';
import { CreateHistoryRequest } from '../dtos/history/create-history.request';
import { CreateHistoryResponse } from '../dtos/history/create-history.response';

@Injectable({
  providedIn: 'root'  
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  private extractData(res: any) {
    return res || {};
  }

  public getUserHistory(): Observable<GetUserHistoryResponse> {
    return this.http.get<GetUserHistoryResponse>(environment.baseUrl + 'history/user')
      .pipe(map((response: GetUserHistoryResponse) => response)); 
  }

  public createHistory(historyData: CreateHistoryRequest): Observable<CreateHistoryResponse> {
    return this.http.post<CreateHistoryResponse>(environment.baseUrl + 'history/create', historyData)
      .pipe(map(this.extractData));
  }
}
