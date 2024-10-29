import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommunityService } from 'src/app/services/community.service';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-createcommunity',
  templateUrl: './createcommunity.component.html',
  styleUrls: ['./createcommunity.component.scss']
})
export class CreatecommunityComponent {

    registerForm: FormGroup;

    selectedFile: File | null = null;

    public organizations: any[] = [];
    stateOptions: any[] = [
        { label: 'Publica', value: true },
        { label: 'Privada', value: false }
    ];
    constructor(
        public layoutService: LayoutService,
        private fb: FormBuilder,
        private communityService: CommunityService,
        private organizationService: OrganizationService,
        private toast: ToastrService,
        private router: Router
    ) { 
        this.getOrganizations()
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            password: [''],
            confirmPassword: [''],
            description: [''],  
            image: ['', Validators.required],
            public: [true, Validators.required],
            organization: [null, Validators.required]
        }, { validators: this.passwordMatchValidator });
    }

    getOrganizations(){
        this.organizationService.getOrganizations().subscribe(response => {
            if (response.success == true) {
                this.organizations = response.organizations
            }else{
                this.organizations = []
            }
        })
    }
    passwordMatchValidator(formGroup: AbstractControl): { [key: string]: any } | null {
        const password = formGroup.get('password')?.value;
        const confirmPassword = formGroup.get('confirmPassword')?.value;
        if (password !== confirmPassword) {
            return { 'passwordMismatch': true };
        }
        return null;
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            this.selectedFile = file;
        }
    }

    doRegister() {
        if (this.registerForm.valid) {
            const formValues = this.registerForm.value;

            const formData = {
                name: formValues.name,
                description: formValues.description,
                image: formValues.image,
                public: formValues.public,
                organization: formValues.organization.uuid
             };
            // Ajustar el servicio para llamar al endpoint correcto
            this.communityService.registerCommunity(formData).subscribe(response => {
                if (response.success == true) {
                    this.toast.success(response.message, "Registro", { timeOut: 3500 });
                    this.router.navigate(['/app/feed']);
                } else {
                    this.toast.error(response.message, "Registro", { timeOut: 3500 });
                }
            }, error => {
                this.toast.error("Error al registrar la comunidad", "Registro", { timeOut: 3500 });
            });
        } else {
            this.toast.error("Por favor, completa todos los campos requeridos y selecciona un archivo.", "Error de validación", {
                timeOut: 3500
            });
        }
    }
}
