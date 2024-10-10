import { NgModule, isDevMode } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpReqInterceptor } from './interceptors/HttpInterceptor';
import { AuthService } from './services/auth.service';
import { ConfirmationService } from 'primeng/api';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, 
        NgxUiLoaderModule.forRoot({
            fgsType: "pulse",
            fgsColor: "#03a9f4",
            fgsSize: 70,
            hasProgressBar: true,
            logoPosition: "center-center",
            logoUrl: '../assets/layout/images/logo.png',
            blur: 5,
            bgsSize: 60,
            gap: 24,
            logoSize: 120,
            text: "Cargando..."
        }),
        NgxUiLoaderHttpModule.forRoot({
            showForeground: true
        }),
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            autoDismiss: true,
            closeButton: true,
            progressBar: true,
            countDuplicates: true,
            tapToDismiss: true,
            progressAnimation: "decreasing"
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpReqInterceptor,
            multi: true
          },
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, AuthService, ConfirmationService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
