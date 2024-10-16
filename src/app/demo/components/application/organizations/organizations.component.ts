import { Component } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent {
  public organizations: any[] = [];
  public layout: string = 'list';
  constructor(private organizationService: OrganizationService) {
    this.getOrganizations();
  }

  public getOrganizations() {
    this.organizationService.getOrganizations().subscribe((res: any) => {
      if(res.success == true){
        this.organizations = res.organizations
      }
    });
  }
}
