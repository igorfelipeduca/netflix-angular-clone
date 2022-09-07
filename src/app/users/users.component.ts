import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

interface userInterface {
  name: string;
  picUrl: string;
  id: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService) {}

  users: userInterface[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getUsers();
  }
}
