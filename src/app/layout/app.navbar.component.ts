import { Component, ElementRef } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './app.navbar.component.html'
})
export class AppNavbarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef, public router: Router) { }


    public showDialog(){

    }
}

