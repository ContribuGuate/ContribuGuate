import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProductService } from '../../service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {

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
    
}
