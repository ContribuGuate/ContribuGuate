import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.translation.passwordPrompt = 'Ingresa una contraseña';
        this.primengConfig.translation.weak = 'Poco segura';
        this.primengConfig.translation.medium = 'Medio';
        this.primengConfig.translation.strong = 'Segura';
    }
}
