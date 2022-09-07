import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface userInterface {
  name: string;
  picUrl: string;
  id: string;
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  userId: string = '';
  user: userInterface | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params); // { order: "popular" }

      this.userId = params.userId;
      console.log(this.userId); // popular
    });

    this.userService.getUsers().map((user) => {
      if (user.id === this.userId) {
        console.log(user);
        this.user = user;
      }
    });
  }
}
