import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as userActions from '../../store/actions/user.actions';
import { Store, select } from '@ngrx/store';
import { IUserState, IUserList, ISingleUser } from '../../store/users.state';
import {
  getUserList,
  getUserDetail,
} from '../../store/selectors/user.selectors';
import { ConnectedComponent } from '../connected-component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
})
export class UserEditorComponent extends ConnectedComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<IUserState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: '',
      email: ['', Validators.required],
      firstName: [''],
      lastName: [''],
    });

    this.store
      .pipe(select(getUserList, takeUntil(this.destroyed)))
      .subscribe((list: IUserList) => {
        if (this.loading) {
          this.loading = false;
          this.onCancel();
        }
      });

    this.store
      .pipe(select(getUserDetail, takeUntil(this.destroyed)))
      .subscribe((user: ISingleUser) => {
        if (user) {
          this.form.patchValue(user);
        }
      });
  }

  onCancel() {
    this.router.navigate(['.'], {
      relativeTo: this.route.parent,
    });
  }

  onConfirm() {
    const data = this.form.getRawValue();
    this.loading = true;
    if (data.id) {
      this.store.dispatch(userActions.editUser(data));
    } else {
      this.store.dispatch(userActions.createUser(data));
    }
  }
}
