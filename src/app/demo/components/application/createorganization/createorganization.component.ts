import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { OrganizationService } from 'src/app/services/organization.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createorganization',
  templateUrl: './createorganization.component.html',
  styleUrl: './createorganization.component.scss'
})
export class CreateorganizationComponent {
  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'es';
  public type: 'image' | 'audio';
  public useGlobalDomain: boolean = false;
  public registerOrganization: boolean = true;
  public organizationObj: any = null;
  registerForm: FormGroup;
  public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';

  constructor(
      public layautservices: LayoutService,
      private OrganizationService: OrganizationService,
      private fb: FormBuilder,
      private toast: ToastrService,
      private router: Router
  ) {
      // Agregar el campo de logoUrl en lugar de selectedFile
      this.registerForm = this.fb.group({
          name: ['', Validators.required],            
          description: ['', Validators.required],      
          website: ['', Validators.required],
          contact: ['', Validators.required],         
          address: [''],
          image: ['', [Validators.required, Validators.pattern(/https?:\/\/.+\.(jpg|jpeg|png|gif|svg)$/i)]]
      });
  }

  public exitOrganization(){
    this.registerOrganization = false;
    this.organizationObj = null;
    this.router.navigate(['/app/organizations'])
  }


  public doRegister() {
    if (this.registerForm.valid) {
        const formValues = this.registerForm.value;

        this.OrganizationService.registerEmp(formValues).subscribe((e) => {
            if (e.success == true) {
                this.toast.success(e.message, "Organizaciones", {
                    timeOut: 3500
                });
                this.organizationObj = e.organization;
                this.registerOrganization = true;
                this.registerForm.reset();
                // this.router.navigate(['/app/feed']);
            } else {
                this.toast.error(e.message, "Organizaciones", {
                    timeOut: 3500
                });
            }
        });
    } else {
        this.toast.error("Por favor, completa todos los campos requeridos.", "Error de validación", {
            timeOut: 3500
        });
    }
}



}
