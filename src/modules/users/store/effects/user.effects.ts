import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.actions';
import { ApiService } from '../../../app-core/services/services/api.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IUserList, ISingleUser, IUserDetail } from '../users.state';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserEffects {
  private url = 'users';
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers.type),
      switchMap(() => {
        return this.apiService.get<IUserList>(this.url).pipe(
          map((result: IUserList) => {
            return userActions.loadUsersSuccess(result);
          }),
          catchError((error: HttpErrorResponse) => {
            return userActions.loadUsersFailure;
          })
        );
      })
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.createUser.type),
      switchMap((payload: ISingleUser) => {
        return this.apiService.post<ISingleUser>(this.url, payload).pipe(
          map((result: ISingleUser) => {
            return userActions.createUserSuccess({
              data: result,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            return userActions.loadUsersFailure;
          })
        );
      })
    )
  );

  loadUserDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUserDetail.type),
      switchMap((payload: { id: string }) => {
        return this.apiService.get<IUserDetail>(this.url, payload.id).pipe(
          map((result: IUserDetail) => {
            return userActions.loadUserDetailSuccess(result);
          }),
          catchError((error: HttpErrorResponse) => {
            return userActions.loadUserDetailFailure;
          })
        );
      })
    )
  );

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.editUser.type),
      switchMap((payload: ISingleUser) => {
        return this.apiService
          .put<ISingleUser>(this.url, payload, payload.id)
          .pipe(
            map((result: ISingleUser) => {
              return userActions.editUserSuccess({
                data: result,
              });
            }),
            catchError((error: HttpErrorResponse) => {
              return userActions.editUserFailure;
            })
          );
      })
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.deleteUser.type),
      switchMap((payload: ISingleUser) => {
        return this.apiService.delete<ISingleUser>(this.url, payload.id).pipe(
          map(() => {
            return userActions.deleteUserSuccess({
              data: payload,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            return userActions.deleteUserFailure;
          })
        );
      })
    )
  );
}
