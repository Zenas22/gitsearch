import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Response, Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reposArray:any;


  link = "https://api.github.com/users/";

  access_token = "?access_token=bf498cba8caba4b97a654f7da329cadebbf88cf7";
  user = [];
  repos = [];

  constructor(private http:Http) {}
  searchHub(search: HTMLInputElement){
    let userlink = this.link + search.value + this.access_token;
    let repolink = this.link + search.value + "/repos" + this.access_token;
    this.http.get(userlink).subscribe((res:Response)=>{
      this.user = res.json();
      console.log(this.user);
    })
    this.http.get(repolink).subscribe((res2:Response)=>{
      this.repos = res2.json();
      console.log(this.repos);
    })

  }

  ngOninit(){
  //  this.http.get("https://api.github.com/users/zenas22?access_token=bf498cba8caba4b97a654f7da329cadebbf88cf7").subscribe((res:Response)=>{
  //  console.log(res.json());
  // })
  }
}
