import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IUserState, IUserList, ISingleUser } from '../../store/users.state';
import {
  getUserLoading,
  getUserList,
} from '../../store/selectors/user.selectors';
import { ConnectedComponent } from '../../../app-core/components/connected-component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent extends ConnectedComponent implements OnInit {
  loading = true;
  users: ISingleUser[];

  constructor(private route: ActivatedRoute, private store: Store<IUserState>) {
    super();
  }

  ngOnInit(): void {
    this.store
      .pipe(select(getUserLoading), takeUntil(this.destroyed))
      .subscribe((loading: boolean) => {
        this.loading = loading;
      });
    this.store
      .pipe(select(getUserList), takeUntil(this.destroyed))
      .subscribe((list: IUserList) => {
        this.users = list?.data;
      });
  }
}
