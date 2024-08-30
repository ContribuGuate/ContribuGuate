import { Component } from '@angular/core';
import { CommunityService } from 'src/app/services/community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.scss'
})
export class CommunitiesComponent {
  public communities: any[] = []
  layout: string = 'list';
  constructor(private communityService: CommunityService) { 
    this.communityService.getCommunities()
    .subscribe((e) => {
      if(e.success == true){
        this.communities = e.communities
      }else{
        this.communities = []
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
