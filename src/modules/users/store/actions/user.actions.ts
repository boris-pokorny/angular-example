import { createAction, props } from '@ngrx/store';
import { ISingleUser, IUserDetail } from '../users.state';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const createUser = createAction(
  '[User] Create User',
  props<ISingleUser>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{ data: ISingleUser }>()
);

export const createUserFailure = createAction(
  '[User] Create User Failure',
  props<{ error: any }>()
);

export const loadUserDetail = createAction(
  '[User] Load User Detail',
  props<{ id: string }>()
);

export const loadUserDetailSuccess = createAction(
  '[User] Load User Detail Success',
  props<IUserDetail>()
);

export const loadUserDetailFailure = createAction(
  '[User] Load User Detail Failure',
  props<{ error: any }>()
);

export const editUser = createAction(
  '[User] Edit User',
  props<ISingleUser>()
);

export const editUserSuccess = createAction(
  '[User] Edit User Success',
  props<{ data: ISingleUser }>()
);

export const editUserFailure = createAction(
  '[User] Edit User Failure',
  props<{ error: any }>()
);

export const deleteUser = createAction(
  '[User] Delete User',
  props<ISingleUser>()
);

export const deleteUserSuccess = createAction(
  '[User] Delete User Success',
  props<{ data: ISingleUser }>()
);

export const deleteUserFailure = createAction(
  '[User] Delete User Failure',
  props<{ error: any }>()
);
