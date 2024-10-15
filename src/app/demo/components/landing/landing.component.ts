import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProductService } from '../../service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {
    #document = inject(DOCUMENT);
    public darkMode: boolean = false;
    public joinVisible: boolean = false;
    public joinForm: FormGroup;
    constructor(public layoutService: LayoutService, public router: Router, private product: ProductService, private fb: FormBuilder) { 
        this.product.getProducts().then(data => console.log(data))
        

        this.joinForm = this.fb.group({
            code: ['', Validators.required]
        })
    }


    public showDialog(){
        this.joinVisible = !this.joinVisible;
    }

    public onToggleDarkMode(): void {
        this.darkMode = !this.darkMode;
        const linkElem = this.#document.getElementById('theme-css') as HTMLLinkElement;
        if(this.darkMode == true){
          linkElem.href = 'assets/layout/styles/theme/md-dark-indigo/theme.css'
          localStorage.setItem('system.Theme', 'dark');
        }else{
          linkElem.href = 'assets/layout/styles/theme/md-light-indigo/theme.css'
          localStorage.setItem('system.Theme', 'light');
        }
      }
    
}
