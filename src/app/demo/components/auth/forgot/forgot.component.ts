import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class ForgotComponent{
    public forgotForm: FormGroup;
    constructor(private fb: FormBuilder){
        this.forgotForm = this.fb.group({
            email: ['', Validators.required]
        })
    }

    public doForgot(){}
    
}