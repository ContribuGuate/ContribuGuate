import { DOCUMENT } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { CommunityService } from "src/app/services/community.service";

@Component({
    selector: 'app-auth-navbar',
    templateUrl: './navbar.component.html'
})
export class AppNavbarComponent {
    public joinCommunityVisible: boolean = false;
    public joinCommunityForm: FormGroup;
    public preferencesDialog: boolean = false;
    public communityDialog: boolean = false;
    public darkMode: boolean = false;
    public communityToJoin: any = null;
  
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
            label: 'Organizaciones',
            icon: 'pi pi-sitemap',
            items: [
                {
                    label: 'Explorar',
                    icon: 'pi pi-map',
                    command: () => {
                        this.router.navigate(['/app/organizations']);
                    }
                },
                {
                    label: 'Crear una',
                    icon: 'pi pi-plus',
                    command: () => {
                        this.router.navigate(['/app/organizations/create']);
                    }
                }
            ]
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
                    items: [
                        {
                            label: 'Calendario de eventos',
                            icon: 'pi pi-calendar',
                            command: () => {
                                this.router.navigate(['/app/events']);
                            }
                        },
                        {
                            label: 'Crear evento',
                            icon: 'pi pi-plus',
                            command: () => {
                                this.router.navigate(['/app/event/create']);
                            }
                        }
                    ]
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
    constructor(private router: Router, private fb: FormBuilder, public layoutService: LayoutService,
        private communityService: CommunityService, private toast: ToastrService
    ) {
        this.joinCommunityForm = this.fb.group({
            code: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])]
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


      public joinWithCode(){
        this.communityService.getByCode(this.joinCommunityForm.controls['code'].value)
        .subscribe((e) => {
            if(e.success == true){
                this.communityDialog = true;
                this.joinCommunityVisible = false;
                this.joinCommunityForm.reset()
                this.communityToJoin = e.community;
            }else{
                this.communityDialog = false;
                this.joinCommunityForm.reset();
                this.toast.error(e.message ?? "Error al unirse a la comunidad", "Comunidades", {
                    timeOut: 4500
                });
            }
        })
      }
}