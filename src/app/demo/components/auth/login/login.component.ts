import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    loginForm: FormGroup;

    constructor(public layoutService: LayoutService, private authService: AuthService, private fb: FormBuilder, private toast: ToastrService,
        private router: Router
    ) { 
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            remember: [false]
        })
    }

    public doLogin(){

        this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value, this.loginForm.get('remember')?.value)
        .subscribe((e) => {
            if(e.success == true){
                this.toast.success(e.message, "Autenticacion", {
                    timeOut: 3500
                });
                localStorage.setItem('contribuguateToken', e.token);
                this.router.navigate(['/app/feed'])
            }else{
                this.toast.error(e.message, "Autenticacion", {
                    timeOut: 3500
                });
            }
        })
    }
}
