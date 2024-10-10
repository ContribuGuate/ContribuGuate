import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReCaptcha2Component } from "ngx-captcha";
import { LayoutService } from "src/app/layout/service/app.layout.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterComponent{

    @ViewChild('captchaElem', { static: false }) captchaElem: ReCaptcha2Component;
    public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'es';
  public type: 'image' | 'audio';
  public useGlobalDomain: boolean = false;
    registerForm: FormGroup;
    public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';

    
    constructor(public layoutService: LayoutService, private fb: FormBuilder, private cdr: ChangeDetectorRef) { 
        this.registerForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    public doRegister(){
      console.log(this.registerForm.value);
    }

    handleReset(): void {
        this.captchaSuccess = false;
        this.captchaResponse = undefined;
        this.captchaIsExpired = false;
        this.cdr.detectChanges();
      }
    
      handleSuccess(captchaResponse: string): void {
        this.captchaSuccess = true;
        this.captchaResponse = captchaResponse;
        this.captchaIsExpired = false;
        this.cdr.detectChanges();
      }
    
      handleLoad(): void {
        this.captchaIsLoaded = true;
        this.captchaIsExpired = false;
        this.cdr.detectChanges();
      }
    
      handleExpire(): void {
        this.captchaSuccess = false;
        this.captchaIsExpired = true;
        this.cdr.detectChanges();
      }

      handleError(): void {
        this.captchaSuccess = false;
        this.captchaIsExpired = true;
        this.cdr.detectChanges();
      }
    
      changeTheme(theme: 'light' | 'dark'): void {
        this.theme = theme;
      }
    
      changeSize(size: 'compact' | 'normal'): void {
        this.size = size;
      }
    
      changeType(type: 'image' | 'audio'): void {
        this.type = type;
      }
    
      setUseGlobalDomain(use: boolean): void {
        this.useGlobalDomain = use;
      }
    
      getCurrentResponse(): void {
        const currentResponse = this.captchaElem.getCurrentResponse();
        if (!currentResponse) {
          alert('There is no current response - have you submitted captcha?');
        } else {
          alert(currentResponse);
        }
      }
    
      getResponse(): void {
        const response = this.captchaElem.getResponse();
        if (!response) {
          alert('There is no response - have you submitted captcha?');
        } else {
          alert(response);
        }
      }
    
      reload(): void {
        this.captchaElem.reloadCaptcha();
      }
    
      getCaptchaId(): void {
        alert(this.captchaElem.getCaptchaId());
      }
    
      reset(): void {
        this.captchaElem.resetCaptcha();
      }
}