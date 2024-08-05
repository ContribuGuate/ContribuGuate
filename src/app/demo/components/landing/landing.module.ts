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
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        DividerModule,
        StyleClassModule,
        FormsModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        InputMaskModule,
        AvatarModule
    ],
    declarations: [LandingComponent]
})
export class LandingModule { }
