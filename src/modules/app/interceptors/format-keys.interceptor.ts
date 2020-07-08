import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as camelcase from 'camelcase-keys';

@Injectable()
export class FormatKeysInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event: HttpResponse<unknown>) => {
        if (event instanceof HttpResponse) {
          event = event.clone({ body: camelcase(event.body, { deep: true }) });
        }
        return event;
      })
    );
  }
}
