export interface IApiResource {
  loading: boolean;
  error: string;
}

export interface ISingleUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface IUserList {
  data: ISingleUser[];
}

export interface IUserDetail {
  data: ISingleUser;
}

export interface IUserState extends IApiResource {
    list: IUserList;
    detail: ISingleUser;
}