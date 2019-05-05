import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { User } from './darasa/user';
import { UsersService } from './huduma/users.service';
import { RepoService } from './huduma/repo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UsersService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
