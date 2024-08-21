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

@NgModule({
  declarations: [
    MainComponent,
    FeedComponent,
    CommunitiesComponent
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
    MenuModule
  ],
  providers: [MessageService]
})
export class ApplicationModule { }
