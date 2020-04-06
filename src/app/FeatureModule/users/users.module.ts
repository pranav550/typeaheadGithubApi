import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { Routes, RouterModule } from '@angular/router';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

const routes: Routes = [
  {path:'',children:[
    {path:'list', component:UsersListComponent}
  ]}
  
];
@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TypeaheadModule
  ]
})
export class UsersModule { }
