import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { UserEffects } from './user.effects';
import { ApiService } from '../../../app-core/services/api.service';
import * as userActions from '../actions/user.actions';
import { ISingleUser } from '../users.state';

class MockApiService {
  get(url: string) {
    return of({ data: ['user'] });
  }
  post(url: string, payload: any) {
    return of(<ISingleUser>{
      email: 'email',
    });
  }
}

describe('UserEffects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        { provide: ApiService, useValue: new MockApiService() },
      ],
    });

    effects = TestBed.inject(UserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should load users', async () => {
    actions$ = of(userActions.loadUsers());
    const result = await effects.loadUsers$.toPromise();
    expect(result.data).toEqual(['user']);
  });

  it('should create user', async () => {
    actions$ = of(userActions.createUser(<ISingleUser>{}));
    const result = await effects.createUser$.toPromise();
    expect(result.data.email).toEqual('email');
  });
});
