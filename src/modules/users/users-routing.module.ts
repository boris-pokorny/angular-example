import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListResolver } from './components/user-list/user-list-resolver';
import { UserEditorComponent } from './components/user-editor/user-editor.component';
import { UserEditorResolver } from './components/user-editor/user-editor-resolver';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: 'new',
        component: UserEditorComponent,
      },
      {
        path: ':id',
        component: UserEditorComponent,
        resolve: { data: UserEditorResolver },
      },
      {
        path: '',
        component: UserListComponent,
        resolve: { data: UserListResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
