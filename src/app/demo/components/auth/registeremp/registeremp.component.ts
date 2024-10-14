import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './registeremp.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterempComponent {

    public theme: 'light' | 'dark' = 'light';
    public size: 'compact' | 'normal' = 'normal';
    public lang = 'es';
    public type: 'image' | 'audio';
    public useGlobalDomain: boolean = false;
    registerForm: FormGroup;
    public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';

    selectedFile: File | null = null;

    constructor(
        public layautservices: LayoutService,
        private authService: AuthService,
        private fb: FormBuilder,
        private toast: ToastrService,
        private router: Router
    ) {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],            
            description: ['', Validators.required],      
            website: ['', Validators.required],
            contact: ['', Validators.required],         
            address: ['', Validators.required]           
        });
    }

    public onFileSelected(event: any) {
        this.selectedFile = event.target.files[0] as File;
    }

    public doRegister() {
        if (this.registerForm.valid && this.selectedFile) {
            const formValues = this.registerForm.value;

            const formData = new FormData();
            formData.append('name', formValues.name);
            formData.append('description', formValues.description);
            formData.append('website', formValues.website);
            formData.append('contact', formValues.contact);
            formData.append('address', formValues.address);
            formData.append('logo', this.selectedFile, this.selectedFile.name); 

            this.authService.registerEmp(formData).subscribe((e) => {
                if (e.success == true) {
                    this.toast.success(e.message, "Autenticación", {
                        timeOut: 3500
                    });
                    this.router.navigate(['/app/feed']);
                } else {
                    this.toast.error(e.message, "Autenticación", {
                        timeOut: 3500
                    });
                }
            });
        } else {
            this.toast.error("Por favor, completa todos los campos requeridos y selecciona un archivo.", "Error de validación", {
                timeOut: 3500
            });
        }
    }
}
