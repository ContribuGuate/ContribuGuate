import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommunityService } from 'src/app/services/community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

  public organization: any = ''
  public communityObj: any = {}

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
    private router: Router
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
}
