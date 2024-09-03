import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommunityService } from 'src/app/services/community.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.scss'
})
export class CommunitiesComponent {
  public communities: any[] = []
  public logosEndpoint = environment.baseUrl + 'community/logo/'
  layout: string = 'list';
  constructor(public communityService: CommunityService, private toast: ToastrService,
    private router: Router
  ) { 
    this.communityService.getCommunities()
    .subscribe((e) => {
      if(e.success == true){
        this.communities = e.communities
      }else{
        this.communities = []
      }
    })
  }

  public join(community){
    this.communityService.join(community.uuid)
    .subscribe((e) => {
      if(e.success == true){
        this.toast.success(e.message ?? "Te has unido correctamente a la comunidad", "Comunidades", {
          timeOut: 4500
        });
        this.router.navigate(['/app/community/', community.uuid]);
      }else{
        this.toast.error(e.message ?? "Error al unirse a la comunidad", "Comunidades", {
          timeOut: 4500
        })
      }
    })
  }


  getSeverity(product) {
    switch (product.public) {
        case true:
            return 'success';

        case false:
            return 'warning';

        default:
            return 'contrast';
    }
};


}
