import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReCaptcha2Component } from "ngx-captcha";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { AuthService } from "src/app/services/auth.service";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class RegisterComponent {

  @ViewChild('captchaElem', { static: false }) captchaElem: ReCaptcha2Component;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'es';
  public type: 'image' | 'audio';
  public useGlobalDomain: boolean = false;
  registerForm: FormGroup;
  public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';

  constructor(
    public layoutService: LayoutService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router 
  ) { 
    this.registerForm = this.fb.group({
      cui: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      telefono: [''],
      nombreUsuario: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      repiteContrasena: ['', Validators.required]
    });
  }

  public doRegister() {
    if (this.registerForm.valid) {
      this.authService.register(
        this.registerForm.value.cui,
        this.registerForm.value.primerNombre,
        this.registerForm.value.segundoNombre,
        this.registerForm.value.primerApellido,
        this.registerForm.value.segundoApellido,
        this.registerForm.value.telefono,
        this.registerForm.value.nombreUsuario,
        this.registerForm.value.correoElectronico,
        this.registerForm.value.contrasena
      ).subscribe(
        response => {
          if (response.success) {
            console.log('Usuario registrado exitosamente:', response);
            this.router.navigate(['auth/login']);
          } else {
            console.error('Error al registrar:', response.message);
          }
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
    }
  }

 
}
