import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { UsersRoutingModule } from './users-routing.module';
import { UserEditorComponent } from './components/user-editor/user-editor.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { UserListResolver } from './components/user-list/user-list-resolver';
import { UserTableComponent } from './components/user-table/user-table.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { TableButtonsComponent } from './components/table-buttons/table-buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditorResolver } from './components/user-editor/user-editor-resolver';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    UserEditorComponent,
    UserListComponent,
    UserTableComponent,
    TableLayoutComponent,
    TableButtonsComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTabsModule,
  ],
  providers: [UserListResolver, UserEditorResolver],
})
export class UsersModule {}
