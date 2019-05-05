import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { evironment } from '../../environments/environment';
import { Repository } from '../darasa/repository';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  repos: Repos;
  userName: string;

  constructor(private http:Http) {
    this.repos = new Repos("");
  }

  fetchRepo(){
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + this.username + "/repos?access_token" + environment.access_token).toPromise().then(response=>{
        this.repos.reposArray = response;
        resolve()
      },
      error=>{
        this.repos.reposArray = [];
        reject(error)
      })
    })

    return promise
  }

  searchRepo(username:string){
    this.userName = userName;
  }
}
