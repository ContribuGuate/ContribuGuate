import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-trackorganization',
  templateUrl: './trackorganization.component.html',
  styleUrl: './trackorganization.component.scss'
})
export class TrackorganizationComponent {
  public uuidOrganization: string = null;
  public organizationObj: any = null;
  public events: any[] =null;
  constructor(private organizationService: OrganizationService, private activated: ActivatedRoute,
    private router: Router
  ){
    this.activated.params.subscribe(params => {
      this.uuidOrganization = params['id']
    });

    this.getEvents(this.uuidOrganization);
  }

  public getEvents(id: string){
    this.organizationService.getOrganizationTracking(id)
    .subscribe((e) => {
      if(e.success == true){
        this.organizationObj = e.organization;
        this.events = e.organization.history;
      }else{
        this.router.navigate(['/app/organizations'])
      }
    })
  }
}
