import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { UserEffects } from './user.effects';
import { ApiService } from '../../../app-core/services/services/api.service';
import * as userActions from '../actions/user.actions';

class MockApiService {
  get(url: string) {
    return of(userActions.loadUsersSuccess({ data: ['user'] }));
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
});
