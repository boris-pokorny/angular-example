import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from '../users.state';
import { userFeatureKey } from '../reducers/user.reducer';

export const getUserState = createFeatureSelector<IUserState>(userFeatureKey);

export const getUserLoading = createSelector(
  getUserState,
  (state: IUserState) => state.loading
);

export const getUserList = createSelector(
  getUserState,
  (state: IUserState) => state.list
);

export const getUserDetail = createSelector(
  getUserState,
  (state: IUserState) => state.detail
);
