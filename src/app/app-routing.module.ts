import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from './demo/guards/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/landing',
                pathMatch: 'full'
            },
            {
                path: 'landing',
                loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule)
            },
            {
                path: 'app',
                loadChildren: () => import('./demo/components/application/application.module').then(m => m.ApplicationModule),
                canActivate: [AuthGuard]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
