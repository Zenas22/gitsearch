import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../darasa/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User
  userName: string;

  constructor(private http:Http) {
    this.user = new User("","","","","","","","", new Date());
  }

  findUser(){
    interface ApiResponse{
      login: string;
      name: string;
      bio: any;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: any;
      html_url: any;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + this.username + "?access_token" + environment.access_token).toPromise().then(response=>{
        this.user.avatar = response.avatar_url
        this.user.username = response.login
        this.user.name = response.name
        this.user.bio = response.bio
        this.user.repositories = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.link = response.html_url

        resolve();

      },
      error=>{

        reject(error);

      })
    })

    return promise

  }

  searchUser(userName: string){
    this.userName = userName;
  }
}
