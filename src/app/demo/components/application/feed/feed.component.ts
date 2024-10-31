import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { PostService } from 'src/app/services/post.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  items: MenuItem[] | undefined;
  posts = [
  ];

  public userId: any = null;


  constructor(public router: Router, public layoutService: LayoutService, private postService: PostService,
    private toast: ToastrService, private authService: AuthService,
    private sanitizer: DomSanitizer
  ){
    this.getPosts()

    this.userId = this.authService.getUserId()
    console.log(this.userId)

    this.postService.onPostAdded((data) => {
      this.posts.unshift(data)
    })
  }

  public async getPosts(){
    this.postService.getPosts().subscribe(data => this.posts = data.posts)
  }


  getReactionCounts(post: any) {
    return post.reactions.reduce((acc: { [key: string]: number }, reaction: { reaction: string }) => {
      acc[reaction.reaction] = (acc[reaction.reaction] || 0) + 1;
      return acc;
    }, { like: 0, love: 0, inspire: 0 }); // Inicializar cada reacción en 0
  }

  getReactionLabel(reactionType: string, post): string {
    const reactionExists = post.reactions.some(
      reaction => reaction.reaction === reactionType && reaction.user.uuid === this.userId // Cambiado para usar user.uuid
    );

    switch(reactionType) {
      case 'like':
        return reactionExists ? 'Ya no me gusta' : 'Me gusta';
      case 'love':
        return reactionExists ? 'Ya no me encanta' : 'Me encanta';
      case 'inspire':
        return reactionExists ? 'Ya no me inspira' : 'Me inspira';
      default:
        return '';
    }
  }

  

  public async react(type: string, postUuid: string){
    this.postService.react(type, postUuid).subscribe((data) => {
      if(data.success == true){
        this.getPosts()
      }else{
        this.toast.error(data.message ?? "Error al reaccionar", "Publicaciones", {
          timeOut: 4500
        })
      }
    })
  }

  getSanitizedHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


}
