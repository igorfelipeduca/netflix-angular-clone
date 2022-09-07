import { BrowseComponent } from './browse/browse.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'browse', component: BrowseComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
