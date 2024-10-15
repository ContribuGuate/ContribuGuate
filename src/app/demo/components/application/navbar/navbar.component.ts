import { DOCUMENT } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-auth-navbar',
    templateUrl: './navbar.component.html'
})
export class AppNavbarComponent {
    public joinCommunityVisible: boolean = false;
    public joinCommunityForm: FormGroup;
    public preferencesDialog: boolean = false;
    public darkMode: boolean = false;
  
    #document = inject(DOCUMENT);
    items = [
        {
            label: 'Feed',
            icon: 'pi pi-compass',
            command: () => {
                this.router.navigate(['/app/feed']);
            }
        },
        {
            label: 'Comunidades',
            icon: 'pi pi-users',
            items: [
                {
                    label: 'Mis comunidades',
                    icon: 'pi pi-sitemap',
                    command: () => {
                        this.router.navigate(['/app/communities/my']);
                    }
                },
                {
                    label: 'Explorar',
                    icon: 'pi pi-map',
                    command: () => {
                        this.router.navigate(['/app/communities']);
                    }
                },
                {
                    label: 'Unirse a una',
                    icon: 'pi pi-link',
                    command: () => {
                        this.joinCommunityVisible = true;
                    }
                },
                {
                    label: 'Crea la tuya',
                    icon: 'pi pi-plus',
                    command: () => {
                        this.router.navigate(['/app/communities/create']);
                    }
                }
            ]
        },
        {
            label: 'Voluntariado',
            icon: 'pi pi-heart',
            items: [
                {
                    label: 'Eventos', 
                    icon: 'pi pi-calendar',
                    command: () => {
                        this.router.navigate(['/app/events']);
                    }
                },
                {
                    label: 'Historial de participacion',
                    icon: 'pi pi-history'
                },
                {
                    label: 'Recomendaciones',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                }
            ]
        },
        {
            label: 'Mi cuenta',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Configuracion',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Preferencias',
                    icon: 'pi pi-wrench',
                    command: () => {
                        this.preferencesDialog = true;
                    }
                }
            ]
        }
    ]
    constructor(private router: Router, private fb: FormBuilder) {
        this.joinCommunityForm = this.fb.group({
            code: ['', Validators.required]
        })
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