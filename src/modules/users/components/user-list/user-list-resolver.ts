import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Action, Store } from '@ngrx/store';
import * as userActions from '../../store/actions/user.actions';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IUserState } from '../../store/users.state';

@Injectable()
export class UserListResolver implements Resolve<Action> {
  constructor(private store: Store<IUserState>, private action$: Actions) {}

  resolve(
    route: ActivatedRouteSnapshot,
    routeSnapshot: RouterStateSnapshot
  ): Observable<Action> {
    this.store.dispatch(userActions.loadUsers());
    return this.action$.pipe(
      ofType(userActions.loadUsersSuccess.type),
      take(1)
    );
  }
}
