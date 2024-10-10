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
        const linkElem = this.#document.getElementById('theme-css') as HTMLLinkElement;
        const store = localStorage.getItem('system.Theme') ?? 'dark';
        if(store == 'light'){
          linkElem.href = 'assets/layout/styles/theme/md-dark-indigo/theme.css'
        }else if(store == 'dark'){
          linkElem.href = 'assets/layout/styles/theme/md-light-indigo/theme.css'
        }
     }
    
    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.translation.passwordPrompt = 'Ingresa una contraseña';
        this.primengConfig.translation.weak = 'Poco segura';
        this.primengConfig.translation.medium = 'Medio';
        this.primengConfig.translation.strong = 'Segura';
        // this.primengConfig.translation.emptyFilterMessage = 'Sin filtro';
        // this.primengConfig.translation.emptySearchMessage = 'Sin resultados.';

        
    }
}
