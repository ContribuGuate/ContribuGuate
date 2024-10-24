import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-histories',
  standalone: true,
  imports: [],
  templateUrl: './histories.component.html',
  styleUrl: './histories.component.scss'
})
export class HistoriesComponent {

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'es';
  public type: 'image' | 'audio';
  public useGlobalDomain: boolean = false;
  public registerOrganization: boolean = true;
  public organizationObj: any = null;
  registerForm: FormGroup;
  public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';
  public noData: boolean = true; 
  constructor() {}

  
  public downloadPDF(): void {
    
    console.log('Descargar PDF');
  }

  
  public generateReport(): void {
    
    console.log('Generar Reporte');
  }
}
