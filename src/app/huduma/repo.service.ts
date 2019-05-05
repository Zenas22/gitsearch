import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Repository } from '../darasa/repository';
import { Array } from '../darasa/array';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  repos: Array;
  userName: string;

  constructor(private http:HttpClient){
    this.repos = new Array("");
  }

  getRepo(){

    let promise = new Promise((resolve,reject)=>{

      this.http.get(environment.apiUrl + this.userName + '/repos?access_token' + environment.access_token).toPromise().then(response=>{

        this.repos.reposArray = response

        resolve()

      },
      error=>{

        this.repos.reposArray = [];

        reject(error)

      })

    })

  return promise

  }

  searchRepo(userName:string){
    this.userName = userName;
  }

}
