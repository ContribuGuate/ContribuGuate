import { DOCUMENT } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    #document = inject(DOCUMENT);
    constructor(private primengConfig: PrimeNGConfig) {
     }
    
    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.translation.passwordPrompt = 'Ingresa una contraseña';
        this.primengConfig.translation.weak = 'Poco segura';
        this.primengConfig.translation.medium = 'Medio';
        this.primengConfig.translation.strong = 'Segura';
        this.primengConfig.translation.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.primengConfig.translation.nextYear = 'Siguiente año';
        this.primengConfig.translation.prevYear = 'Año anterior';
        this.primengConfig.translation.dayNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        this.primengConfig.translation.dayNamesShort = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
        this.primengConfig.translation.dayNamesMin = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sa'];
        // this.primengConfig.translation.emptyFilterMessage = 'Sin filtro';
        // this.primengConfig.translation.emptySearchMessage = 'Sin resultados.';

        
    }
}
