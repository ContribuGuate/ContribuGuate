import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeedComponent } from './feed/feed.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CommunityComponent } from './community/community.component';
import { MycommunitiesComponent } from './mycommunities/mycommunities.component';
import { CreatecommunityComponent } from './createcommunity/createcommunity.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/app/feed',
        pathMatch: 'full'
      },
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'communities',
        component: CommunitiesComponent
      },
      {
        path: 'communities/my',
        component: MycommunitiesComponent
      },
      {
        path: 'community/:id',
        component: CommunityComponent
      },
      {
        path: 'communities/create',
        component: CreatecommunityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
