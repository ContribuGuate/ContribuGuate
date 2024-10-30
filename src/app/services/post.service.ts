import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { io, Socket } from 'socket.io-client';
@Injectable()
export class PostService {

  private socket: Socket;
  constructor(private http: HttpClient) {
    this.socket = io(`${environment.socket}/posts`, {
      reconnectionAttempts: 3,
      extraHeaders: {
        'Authorization': `Bearer ${localStorage.getItem('contribuguateToken') ?? ""}`
      }
    });
  }

  

  public extractData(res: any) {
    return res || {};
  }

  public addPost(form: any): Observable<any> {
    var body = {
      title: form.title,
      description: form.description,
      image: form.image,
      type: form.type.name,
      community: form.community
    };
    return this.http.post(environment.baseUrl + 'post', body)
      .pipe(map(this.extractData));
  }

  public react(type: string, postId: string): Observable<any> {
    var body = {
      reaction: type,
      post: postId
    }
    return this.http.post(environment.baseUrl + 'post/react', body)
    .pipe(map(this.extractData));
  }

  public getPosts(): Observable<any> {
    return this.http.get(environment.baseUrl + 'post/all')
      .pipe(map(this.extractData));
  }

  emitPostAdded(data: any) {
    this.socket.emit('postAdded', data);
  }

  onPostAdded(callback: (data: any) => void) {
    this.socket.on('postAddedData', callback);
  }
}
