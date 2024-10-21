import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommunityService } from 'src/app/services/community.service';
import { environment } from 'src/environments/environment';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {
  public logosEndpoint = environment.baseUrl + 'community/logo/'
  public organization: any = ''
  public communityObj: any = {}
  public inviteLink: string = 'https://test.com/invite/abcdefg';
  posts = [
    {
      title: 'Tree Planting',
      description: 'Volunteers gathered at the park to plant trees and promote green spaces in the community.',
      image: 'assets/tree-planting.jpg',
      date: new Date('2023-10-05')
    },
    {
      title: 'School Fundraiser',
      description: 'A charity event was organized to raise funds for improving facilities in local schools.',
      image: 'assets/school-fundraiser.jpg',
      date: new Date('2023-09-28')
    },
    // Otros posts...
  ];
  constructor(private route: ActivatedRoute, private community: CommunityService, private toast: ToastrService,
    private router: Router, private clipboard: Clipboard
  ) {
    this.route.paramMap.subscribe( paramMap => {
      this.organization = paramMap.get('id');
      this.community.getOne(this.organization)
      .subscribe((e) => {
        if(e.success == true){
          this.communityObj = e.community
        }else{
          this.toast.error(e.message ?? "Error al cargar comunidad", "Comunidades", {
            timeOut: 4500
          });
          this.router.navigate(['/app/communities']);
        }
      })
  })
  }

  public getUserLabel(user){
    return user.firstname.charAt(0) + user.surname.charAt(0);
  }

  public copyInviteLink(){
    try{
      this.clipboard.copy(this.inviteLink);
      this.toast.success("Enlace de invitación copiado", "Comunidades", {
        timeOut: 4500
      })
    }catch(err){
      this.toast.error("El enlace de invitación no se pudo copiar", "Comunidades", {
        timeOut: 4800
      })
    }
    
  }

  public donate(){

  }

  public isAdmin(){
    return this.communityObj.communityMemberships?.some((m) => m.is_admin === true)
  }
}
