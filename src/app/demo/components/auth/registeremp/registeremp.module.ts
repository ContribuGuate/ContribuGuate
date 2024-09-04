import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterempComponent } from './registeremp.component';
import { RegisterempRoutingModule } from './registeremp-routing.module';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';



@NgModule({
    imports: [
        CommonModule,
        RegisterempRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        DividerModule,
        FieldsetModule,
        CalendarModule,
        NgxCaptchaModule,
        PasswordModule
    ],
    declarations: [RegisterempComponent]
})
export class RegisterempModule { }
