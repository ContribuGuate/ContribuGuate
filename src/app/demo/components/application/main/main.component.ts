import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  items: MenuItem[];
  
  constructor(public router: Router){
    this.items = [
      {
          label: 'Configuracion',
          icon: 'pi pi-cog',
          command: () => {
              
          }
      },
      {
          label: 'Seguridad',
          icon: 'pi pi-shield',
          command: () => {
             
          }
      },
      { separator: true },
      { 
        label: 'Cerrar sesion',
        icon: 'pi pi-sign-out'
      }
  ];
  }

  
}
