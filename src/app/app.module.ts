import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BrowseComponent } from './browse/browse.component';
import { UserIconComponent } from './users/user-icon/user-icon.component';

import { FeatherModule } from 'angular-feather';
import { Search, Bell, ChevronDown, Play, Info } from 'angular-feather/icons';
import { KwBoxComponent } from './browse/kw-box/kw-box.component';

const icons = {
  Search,
  Bell,
  ChevronDown,
  Play,
  Info,
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BrowseComponent,
    UserIconComponent,
    KwBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FeatherModule.pick(icons)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FeatherModule],
})
export class AppModule {}
