import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProductService } from '../../service/product.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {

    public joinVisible: boolean = false;
    public joinCode: string = '';
    constructor(public layoutService: LayoutService, public router: Router, private product: ProductService) { 
        this.product.getProducts().then(data => console.log(data))
        
    }


    public showDialog(){
        this.joinVisible = !this.joinVisible;
    }
    
}
