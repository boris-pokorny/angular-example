import { reducer, initialState } from './user.reducer';
import * as userActions from '../actions/user.actions';
import { ISingleUser } from '../users.state';

describe('User Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });

    it('should set loading to true', () => {
      const action = userActions.loadUsers;

      const result = reducer(initialState, action);

      expect(result.loading).toBe(true);
    });

    it('should set loading to false', () => {
      const users = {
        data: [],
      };
      const action = userActions.loadUsersSuccess(users);

      const result = reducer(initialState, action);

      expect(result.loading).toBe(false);
      expect(result.list.data).toEqual(users.data);
    });
  });

  it('should set created user', () => {
    const user: ISingleUser = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      avatar: '',
    };
    const users = {
      data: [],
    };
    const action = userActions.createUserSuccess({ data: user });

    const result = reducer({ ...initialState, list: users }, action);

    expect(result.loading).toBe(false);
    expect(result.list.data).toEqual([user]);
  });
});
