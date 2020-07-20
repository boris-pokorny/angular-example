import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ToastrService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send get request', async () => {
    const dummyUsers = ['user1'];
    const users = service.get<string[]>('users').toPromise();
    const req = httpMock.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
    expect(await users).toBe(dummyUsers);
  });

  it('should send post request', () => {
    const dummyUser = 'user1';
    service.post<string>('users', dummyUser).toPromise();
    const req = httpMock.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toBe('POST');
  });

  it('should send put request', () => {
    const dummyUser = 'user1';
    service.put<string>('users', dummyUser, '1').toPromise();
    const req = httpMock.expectOne(`${environment.apiUrl}/users/1`);
    expect(req.request.method).toBe('PUT');
  });

  it('should send delete request', () => {
    service.delete<string>('users', '1').toPromise();
    const req = httpMock.expectOne(`${environment.apiUrl}/users/1`);
    expect(req.request.method).toBe('DELETE');
  });
});
