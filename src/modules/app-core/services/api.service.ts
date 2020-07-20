import { Injectable } from '@angular/core';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, timeout, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  get<TResponse>(url: string, id: string = ''): Observable<TResponse> {
    let urlResource = url;
    if (id) {
      urlResource = `${url}/${id}`;
    }
    return this.http.get(`${environment.apiUrl}/${urlResource}`).pipe(
      timeout(1200),
      map((res: TResponse) => {
        return res;
      }),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          this.toastr.error('Timeout', '');
        }
        return throwError(err);
      })
    );
  }

  post<TPayload, TResponse = TPayload>(
    url: string,
    payload: TPayload
  ): Observable<TResponse> {
    return this.http.post(`${environment.apiUrl}/${url}`, payload).pipe(
      map((res: TResponse) => {
        return res;
      })
    );
  }

  put<TPayload, TResponse = TPayload>(
    url: string,
    payload: TPayload,
    id: string
  ): Observable<TResponse> {
    return this.http.put(`${environment.apiUrl}/${url}/${id}`, payload).pipe(
      map((res: TResponse) => {
        return res;
      })
    );
  }

  delete<TResponse>(url: string, id: string): Observable<TResponse> {
    return this.http.delete(`${environment.apiUrl}/${url}/${id}`).pipe(
      map((res: TResponse) => {
        return res;
      })
    );
  }
}
