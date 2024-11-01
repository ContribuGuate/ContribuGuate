import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormsModule } from "@angular/forms";
import { MyCommunityService } from 'src/app/services/mycomunitys.service'; // Ajusta la ruta si es necesario
import { GetUserCommunitiesResponse, CommunityMembership } from 'src/app/dtos/community/my-community.response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mycommunities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mycommunities.component.html',
  styleUrls: ['./mycommunities.component.scss']
})
export class MycommunitiesComponent implements OnInit {
  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'es';
  public type: 'image' | 'audio';
  public useGlobalDomain: boolean = false;
  public organizationObj: any = null;
  registerForm: FormGroup;
  public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';
  public noData: boolean = false;

  public userCommunities: CommunityMembership[] = [];
  public fullResponse: GetUserCommunitiesResponse | null = null;

  constructor(
    private myCommunityService: MyCommunityService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchUserCommunities();
  }

  private fetchUserCommunities(): void {
    this.myCommunityService.getUserCommunities().subscribe(
      (response: GetUserCommunitiesResponse) => {
        this.userCommunities = response as unknown as CommunityMembership[]; 
        this.noData = this.userCommunities.length === 0;
      },
      (error) => {
        console.error('Error al obtener las comunidades:', error);
        this.noData = true;
      }
    );
  }

  leaveCommunity(communityUuid: string): void {
    console.log("UUID recibido:", communityUuid); // Verifica que el UUID sea una cadena y no un objeto
    this.myCommunityService.removeCommunityMembership(communityUuid).subscribe(response => {
      console.log(`Comunidad con UUID ${communityUuid} eliminada`);
      this.fetchUserCommunities();
    });
  }
  
  

  
}
