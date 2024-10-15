import { Component, inject, Input } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { MenuService } from '../app.menu.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html',
})
export class AppConfigComponent {
    @Input() minimal: boolean = false;
    public darkMode: boolean = localStorage.getItem('system.Theme') == 'light' ? true : false;
    #document = inject(DOCUMENT);
    scales: number[] = [12, 13, 14, 15, 16];

    constructor(
        public layoutService: LayoutService,
        public menuService: MenuService
    ) {}

    public onToggleDarkMode(): void {
        this.darkMode = !this.darkMode;
        const linkElem = this.#document.getElementById('theme-css') as HTMLLinkElement;
        if(this.darkMode == true){
          linkElem.href = 'assets/layout/styles/theme/md-dark-indigo/theme.css'
          this.layoutService.config.update((config) => ({ ...config, colorScheme: 'dark' }));
          localStorage.setItem('system.Theme', 'dark');
        }else{
          linkElem.href = 'assets/layout/styles/theme/md-light-indigo/theme.css'
          this.layoutService.config.update((config) => ({ ...config, colorScheme: 'light' }));
          localStorage.setItem('system.Theme', 'light');
        }
      }

    get visible(): boolean {
        return this.layoutService.state.configSidebarVisible;
    }
    set visible(_val: boolean) {
        this.layoutService.state.configSidebarVisible = _val;
    }

    get scale(): number {
        return this.layoutService.config().scale;
    }
    set scale(_val: number) {
        this.layoutService.config.update((config) => ({
            ...config,
            scale: _val,
        }));
    }

    get menuMode(): string {
        return this.layoutService.config().menuMode;
    }
    set menuMode(_val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            menuMode: _val,
        }));
    }

    get inputStyle(): string {
        return this.layoutService.config().inputStyle;
    }
    set inputStyle(_val: string) {
        this.layoutService.config().inputStyle = _val;
    }

    get ripple(): boolean {
        return this.layoutService.config().ripple;
    }
    set ripple(_val: boolean) {
        this.layoutService.config.update((config) => ({
            ...config,
            ripple: _val,
        }));
    }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

    changeTheme(theme: string, colorScheme: string) {
        this.theme = theme;
        this.colorScheme = colorScheme;
    }

    decrementScale() {
        this.scale--;
    }

    incrementScale() {
        this.scale++;
    }
}
