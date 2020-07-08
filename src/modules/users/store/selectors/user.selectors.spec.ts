import { getUserLoading, getUserDetail, getUserList } from './user.selectors';

const initialState = {
  user: { loading: false, list: { data: [] }, detail: null },
};

describe('User Selectors', () => {
  it('should select loading', () => {
    expect(getUserLoading(initialState)).toEqual(false);
  });

  it('should select list', () => {
    expect(getUserList(initialState)).toEqual({ data: [] });
  });

  it('should select detail', () => {
    expect(getUserDetail(initialState)).toEqual(null);
  });
});
