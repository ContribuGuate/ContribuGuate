import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { PostService } from 'src/app/services/post.service';
import { TimeagoIntl } from 'ngx-timeago';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  items: MenuItem[] | undefined;
  posts = [
  ];


  constructor(public router: Router, public layoutService: LayoutService, private postService: PostService,
    private toast: ToastrService
  ){
    this.postService.getPosts().subscribe(data => this.posts = data.posts)


    this.postService.onPostAdded((data) => {
      this.posts.unshift(data)
    })
  }


  public async react(type: string, postUuid: string){
    this.postService.react(type, postUuid).subscribe((data) => {
      if(data.success == true){

      }else{
        this.toast.error(data.message ?? "Error al reaccionar", "Publicaciones", {
          timeOut: 4500
        })
      }
    })
  }

}
