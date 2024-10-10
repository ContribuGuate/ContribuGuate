import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    ForgotComponent
  ],
  imports: [
    CommonModule,
    ForgotRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        ReactiveFormsModule
  ]
})
export class ForgotModule { }
