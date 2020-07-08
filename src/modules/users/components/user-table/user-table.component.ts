import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { TableBase } from "../table-base";
import { ISingleUser, IUserState } from "../../store/users.state";
import { Router, ActivatedRoute } from "@angular/router";
import { TableButtonsComponent } from "../table-buttons/table-buttons.component";
import { MatDialog } from "@angular/material/dialog";
import { DeleteDialogComponent } from "../delete-dialog/delete-dialog.component";
import * as userActions from "../../store/actions/user.actions";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"],
})
export class UserTableComponent extends TableBase<ISingleUser>
  implements OnInit {
  displayedColumns = ["email", "firstName", "lastName", "buttons"];
  @ViewChild("tableButtons") tableButtons: TableButtonsComponent<ISingleUser>;
  @Input() showFilter = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private store: Store<IUserState>
  ) {
    super();
  }

  ngOnInit(): void {}

  addUser = () => {
    this.router.navigate(["new"], {
      relativeTo: this.route,
    });
  };

  editUser = (user: ISingleUser) => {
    this.router.navigate([`${user.id}`], {
      relativeTo: this.route,
    });
  };

  deleteUser = (user: ISingleUser) => {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.store.dispatch(userActions.deleteUser(user));
      }
    });
  };

  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };
}
