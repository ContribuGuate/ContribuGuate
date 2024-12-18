import { DOCUMENT } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { AuthService } from "src/app/services/auth.service";
import { CommunityService } from "src/app/services/community.service";
import { PostService } from "src/app/services/post.service";

@Component({
    selector: 'app-auth-navbar',
    templateUrl: './navbar.component.html'
})
export class AppNavbarComponent {
    public joinCommunityVisible: boolean = false;
    public joinCommunityForm: FormGroup;
    public preferencesDialog: boolean = false;
    public personalInfo: boolean = false;
    public personalInfoObj: any = null;
    public communityDialog: boolean = false;
    public darkMode: boolean = false;
    public communityToJoin: any = null;
    public postVisible: boolean = false;
    public postForm: FormGroup;
    countries: any[] | undefined;
    public communitiesArr: any[] = [];
    postTypes = [
        {
            name: 'post',
            label: 'Post',
            icon: 'pi pi-pencil',
        },
        {
            name: 'donation',
            label: 'Donacion',
            icon: 'pi pi-money-bill',
        },
        {
            name: 'goal',
            label: 'Meta',
            icon: 'pi pi-chart-pie',
        },
        {
            name: 'request',
            label: 'Solicitud',
            icon: 'pi pi-info-circle',
        }
    ]
  
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
            label: 'Social',
            icon: 'pi pi-users',
            items: [
                {
                    label: 'Crear post',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.postVisible = !this.postVisible
                    }
                }
            ]
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
                    icon: 'pi pi-history',
                    command: () => {
                        this.router.navigate(['app/histories']);
                    }
                },
                // {
                //     label: 'Recomendaciones',
                //     icon: 'pi pi-bolt'
                // },
                // {
                //     label: 'UI Kit',
                //     icon: 'pi pi-pencil'
                // }
            ]
        },
        {
            label: 'Mi cuenta',
            icon: 'pi pi-user',
            items: [
                // {
                //     label: 'Configuracion',
                //     icon: 'pi pi-cog'
                // },
                {
                    label: 'Informacion personal',
                    icon: 'pi pi-id-card',
                    command: () => {
                        this.personalInfo = !this.personalInfo;
                    }
                },
                // {
                //     label: 'Preferencias',
                //     icon: 'pi pi-wrench',
                //     command: () => {
                //         this.preferencesDialog = true;
                //     }
                // },
                {
                    label: 'Cerrar sesion',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        localStorage.clear()
                        this.router.navigate(['/auth/login']);
                        this.toast.success('Sesion cerrada', 'Cierre de sesion', {
                            timeOut: 3500
                        })
                    }
                }
            ]
        }
    ]
    constructor(private router: Router, private fb: FormBuilder, public layoutService: LayoutService,
        private communityService: CommunityService, private toast: ToastrService,
        private authService: AuthService,
        private communities: CommunityService,
        private postService: PostService
    ) {
        this.joinCommunityForm = this.fb.group({
            code: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])]
        })

        this.postForm = this.fb.group({
            description: ['', Validators.required],
            community: [null]
        })
        this.getProfile()

        this.communities.getUserCommunities()
        .subscribe((e) => {
            if(e.success == true){
                this.communitiesArr = e.communities
            }else{
                this.communitiesArr = []
            }
        })

     }

     public async getProfile(){
        this.authService.getProfile().subscribe((e) => {
            if(e.success == true){
                this.personalInfoObj = e.profile;
            }else{
                this.toast.error("Error al obtener la informacion del usuario", "Informacion personal", {timeOut: 4500})
            }
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


      public async addPost(){
        
        this.postService.addPost(this.postForm.value).subscribe((e) => {
            if(e.success == true){
                this.postVisible = false;
                this.postForm.reset();
                this.postService.emitPostAdded(e.post);
                this.toast.success(e.message ?? "Publicacion agregada", "Publicaciones", {
                    timeOut: 4500
                });
            }else{
                this.toast.error(e.message ?? "Error al crear la publicacion", "Publicaciones", {
                
            })}
        })
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