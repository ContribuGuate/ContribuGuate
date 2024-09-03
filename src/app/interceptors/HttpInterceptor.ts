import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, map, throwError } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ConfirmationService } from 'primeng/api';



@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {

  constructor(private loader: NgxUiLoaderService, private toastr: ToastrService, private router: Router,
    private auth: AuthService, private confirmationService: ConfirmationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('contribuguateToken') ?? "";

    var newReq = null;
    if (token != null && token.trim() != "" && token.length > 0) {
      const headers = request.headers
        .set('Authorization', `Bearer ${token}`)
        .set('Cache-Control', 'none')
      newReq = request.clone({ headers });
    } else {
      newReq = request;
    }



    this.loader.start()
    return next.handle(newReq).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 0:
              this.toastr.error('Parece que ocurrió un error en el server o está apagado. Intente más tarde',
                'Error de conexión a servers', {
                timeOut: 5500
              })
              break;
            case 500:
              this.toastr.info(error.statusText, 'Error HTTP', {
                timeOut: 3500
              })
              break;
            case 400:
              this.toastr.warning(error.error.message ?? error.message, "Error al procesar la solicitud", {
                timeOut: 4200
              })
              break;
            case 401:
              this.toastr.warning('No cuenta con acceso o credenciales', 'Acceso no autorizado', {
                timeOut: 3500
              });
              localStorage.clear();
              this.router.navigate(['/auth/login']);
              break;
            case 404:
              this.toastr.warning('El recurso solicitado retornó (404, No Existe)', 'Recurso no disponible', {
                timeOut: 4200
              });
              // this.router.navigate(['notfound']);
              break;
            case 422:
              this.toastr.warning('Entidad no procesable, puede que el token no cuente con suficientes argumentos. La sesión será destruída. ', 'Error 422 (Token inválido)', {
                timeOut: 4200
              });
              localStorage.clear();
              this.router.navigate(['auth/login']);
              break;
            // case 503:
            //   this.toastr.warning(error.message, 'Error 503', {
            //     timeOut: 4200
            //   });
            // break;
            default:
              this.toastr.error(error.statusText, 'Error HTTP', {
                timeOut: 3500
              })
              break;
          }

        }
        return throwError(error);
      }),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status == 200) {
          const body = event.body;
          if (body && body.message && body.messsage instanceof Array) {
            this.toastr.warning(body.message.map((e) => e.toString()), "Error al procesar la solicitud", {
              timeOut: 4200
            })
          }
        }
        return event;
      }),
      finalize(() => {
        this.loader.stop();
      })
    )
  }
}