import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AppConfigModule } from "../../../layout/config/config.module";
import { AppConfigComponent } from 'src/app/layout/config/app.config.component';

@NgModule({
    imports: [
    CommonModule,
    LandingRoutingModule,
    DividerModule,
    StyleClassModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    PanelModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    AvatarModule,
    ScrollTopModule,
    InputMaskModule,
    AppConfigModule
],
    declarations: [LandingComponent]
})
export class LandingModule { }
