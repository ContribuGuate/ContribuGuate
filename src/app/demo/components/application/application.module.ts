import { CalendarModule } from 'primeng/calendar';
import { Injectable, Input, NgModule } from '@angular/core';
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
import { ClipboardModule } from '@angular/cdk/clipboard';
import { IL10nsStrings, TimeagoIntl, TimeagoModule } from 'ngx-timeago';
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
import { TabView, TabViewModule } from 'primeng/tabview';
import { MycommunitiesComponent } from './mycommunities/mycommunities.component';
import { PanelModule } from 'primeng/panel';
import { CreatecommunityComponent } from './createcommunity/createcommunity.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';
import { FileUploadModule } from 'primeng/fileupload';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationService } from 'src/app/services/organization.service';
import { CreateorganizationComponent } from './createorganization/createorganization.component';
import { EventsComponent } from './events/events.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TimelineModule } from 'primeng/timeline';
import { TrackorganizationComponent } from './trackorganization/trackorganization.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { EventService } from 'src/app/services/event.service';
import { AppConfigModule } from 'src/app/layout/config/config.module';
import { HistoriesComponent } from './histories/histories.component'; 
import { CreateeventComponent } from './createevent/createevent.component';
import { PostService } from 'src/app/services/post.service';
import { strings as spanishStrings } from 'ngx-timeago/language-strings/es';
import { EditorModule } from 'primeng/editor';
@Injectable()
export class MyIntl extends TimeagoIntl {
  override strings = spanishStrings;
}

@NgModule({
  declarations: [
    MainComponent,
    FeedComponent,
    CommunitiesComponent,
    AppNavbarComponent,
    CommunityComponent,
    CreatecommunityComponent,
    OrganizationsComponent,
    CreateorganizationComponent,
    EventsComponent,
    TrackorganizationComponent,
    CreateeventComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    AppConfigModule,
    StyleClassModule,
    ButtonModule,
    DividerModule,
    ScrollTopModule,
    DialogModule,
    SplitButtonModule,
    SpeedDialModule,
    ToastModule,
    CardModule,
    OverlayPanelModule,
    ClipboardModule,
    InputGroupAddonModule,
    MenuModule,
    InputMaskModule,
    TooltipModule,
    MenubarModule,
    AvatarModule,
    InputTextModule,
    BadgeModule,
    InputTextareaModule,
    DialogModule,
    CheckboxModule,
    DropdownModule,
    SelectButtonModule,
    ReactiveFormsModule,
    DataViewModule,
    TagModule,
    InputSwitchModule,
    FullCalendarModule,
    FormsModule,
    InputGroupModule,
    TabViewModule,
    AvatarModule,
    PanelModule,
    TimelineModule,
    FieldsetModule,  // <-- Add this line for p-fieldset
    PasswordModule,  // <-- Add this line for p-password
    FileUploadModule,
    HistoriesComponent,
    SpeedDialModule,
    DropdownModule,
    CalendarModule,
    MycommunitiesComponent,
    EditorModule,
    TimeagoModule.forRoot({
      intl: { provide: TimeagoIntl, useClass: MyIntl }
    })
  ],
  providers: [MessageService, CommunityService, TabView, OrganizationService, EventService, PostService, TimeagoIntl]
})
export class ApplicationModule { }
