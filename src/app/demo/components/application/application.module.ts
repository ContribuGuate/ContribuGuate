import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { StyleClassModule } from 'primeng/styleclass';
import { MainComponent } from './main/main.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FeedComponent } from './feed/feed.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CardModule } from 'primeng/card';

import { TimeagoModule } from 'ngx-timeago';
import { MenuModule } from 'primeng/menu';
import { InputMaskModule } from 'primeng/inputmask';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { AppNavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunityComponent } from './community/community.component';
import { CommunityService } from 'src/app/services/community.service';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputGroupModule } from 'primeng/inputgroup';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabView, TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    MainComponent,
    FeedComponent,
    CommunitiesComponent,
    AppNavbarComponent,
    CommunityComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    StyleClassModule,
    ButtonModule,
    DividerModule,
    ScrollTopModule,
    DialogModule,
    SplitButtonModule,
    SpeedDialModule,
    ToastModule,
    CardModule,
    TimeagoModule.forRoot(),
    MenuModule,
    InputMaskModule,
    TooltipModule,
    MenubarModule,
    AvatarModule,
    InputTextModule,
    BadgeModule,
    DialogModule,
    ReactiveFormsModule,
    DataViewModule,
    TagModule,
    InputSwitchModule,
    FormsModule,
    InputGroupModule,
    TabViewModule
  ],
  providers: [MessageService, CommunityService, TabView]
})
export class ApplicationModule { }
