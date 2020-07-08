import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<TResponse>(url: string, id: string = ''): Observable<TResponse> {
    let urlResource = url;
    if (id) {
      urlResource = `${url}/${id}`;
    }
    return this.http.get(`${environment.apiUrl}/${urlResource}`).pipe(
      map((res: TResponse) => {
        return res;
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
