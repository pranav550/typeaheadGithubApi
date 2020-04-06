import { UsersModule } from './FeatureModule/users/users.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryListComponent } from './FeatureModule/repository/repository-list/repository-list.component';


const routes: Routes = [
  {path:'', redirectTo: 'repository/list',  pathMatch: 'full'},
   { path: 'repository/list', component: RepositoryListComponent },
  { path: 'repository', loadChildren: () => import(`./FeatureModule/repository/repository.module`).then(m => m.RepositoryModule) },
  { path: 'users', loadChildren: () => import(`./FeatureModule/users/users.module`).then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
