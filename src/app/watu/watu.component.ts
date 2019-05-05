import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UsersService } from '../huduma/users';
import { User } from '../darasa/user';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-watu',
  templateUrl: './watu.component.html',
  providers: [UsersService],
  styleUrls: ['./watu.component.css']
})
export class WatuComponent implements OnInit {

  user: User;
  userName: string;

  constructor( private userFindService: UsersService) {
    this.userFindService.userName = "Zenas22";
    this.userFindService.findUser();
    this.user = this.userFindService.user;
  }

  searchUser(){
    this.userFindService.searchUser(this.username);
    this.userFindService.findUser();
    this.user = this.userFindService.user;
  }

  ngOnInit() {
  }

}
