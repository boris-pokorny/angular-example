import { createReducer, on } from '@ngrx/store';
import { IUserState } from '../users.state';
import * as userActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export const initialState: IUserState = {
  list: null,
  detail: null,
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(userActions.loadUsers, (state) => ({
    ...state,
    loading: true,
  })),

  on(userActions.loadUsersSuccess, (state, action) => ({
    ...state,
    list: action,
    loading: false,
  })),

  on(userActions.createUser, (state) => ({
    ...state,
    loading: true,
  })),

  on(userActions.createUserSuccess, (state, action) => ({
    ...state,
    list: {
      data: [...state.list.data, action.data],
    },
    loading: false,
  })),

  on(userActions.loadUserDetail, (state) => ({
    ...state,
    loading: true,
  })),

  on(userActions.loadUserDetailSuccess, (state, action) => ({
    ...state,
    detail: action.data,
    loading: false,
  })),

  on(userActions.editUser, (state) => ({
    ...state,
    loading: true,
  })),

  on(userActions.editUserSuccess, (state, action) => ({
    ...state,
    list: {
      data: replaceElement(state.list.data, action.data),
    },
    loading: false,
  })),

  on(userActions.deleteUser, (state) => ({
    ...state,
    loading: true,
  })),

  on(userActions.deleteUserSuccess, (state, action) => ({
    ...state,
    list: {
      data: removeElement(state.list.data, action.data),
    },
    loading: false,
  }))
);

function replaceElement(array: { id: string }[], element: { id: string }) {
  const index = array.findIndex((a) => a.id === element.id);
  const newArray = array.slice();
  newArray[index] = element;
  return newArray;
}

function removeElement(array: { id: string }[], element: { id: string }) {
  const index = array.findIndex((a) => a.id === element.id);
  const newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
}
