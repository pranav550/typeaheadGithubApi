import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { Routes, RouterModule } from '@angular/router';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

const routes: Routes = [
  {path:'',children:[
    {path:'list', component:RepositoryListComponent}
  ]}
];

@NgModule({
  declarations: [RepositoryListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TypeaheadModule.forRoot(),
    FormsModule
  ]
})
export class RepositoryModule { }
