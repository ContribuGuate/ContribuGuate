import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommunityService } from 'src/app/services/community.service';

@Component({
  selector: 'app-createcommunity',
  templateUrl: './createcommunity.component.html',
  styleUrls: ['./createcommunity.component.scss']
})
export class CreatecommunityComponent {

    registerForm: FormGroup;

    // Aquí declaramos la propiedad selectedFile
    selectedFile: File | null = null;

    constructor(
        public layoutService: LayoutService,
        private fb: FormBuilder,
        private communityService: CommunityService,
        private toast: ToastrService,
        private router: Router
    ) { 
        this.registerForm = this.fb.group({
            nombreComunidad: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, { validators: this.passwordMatchValidator });
    }

    // Validador personalizado para verificar que las contraseñas coinciden
    passwordMatchValidator(formGroup: AbstractControl): { [key: string]: any } | null {
        const password = formGroup.get('password')?.value;
        const confirmPassword = formGroup.get('confirmPassword')?.value;
        if (password !== confirmPassword) {
            return { 'passwordMismatch': true };
        }
        return null;
    }

    // Método para manejar la selección del archivo
    public onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            this.selectedFile = file;
        }
    }

    public doRegister() {
        if (this.registerForm.valid && this.selectedFile) {
            const formValues = this.registerForm.value;

            const formData = new FormData();
            formData.append('nombreComunidad', formValues.nombreComunidad);
            formData.append('password', formValues.password);
            formData.append('imagep', this.selectedFile, this.selectedFile.name);

            this.communityService.registerCommunity(formData).subscribe(response => {
                if (response.success) {
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
