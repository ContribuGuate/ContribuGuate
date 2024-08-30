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
            {
                path: 'app2', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'community', loadChildren: () => import('./demo/components/community/community.module').then(m => m.CommunityModule) },
                    { path: 'about', loadChildren: () => import('./demo/components/about/about.module').then(m => m.AboutModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
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
