import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // private =client_id:` 2d9567b69771d1c4dcee,`;
  // private =client_secret:`3d3487c52a77d4bb6cd49cb665314e560766e530`;
  
  url : string = "https://api.github.com/users/"
   repos : string =  "https://api.github.com/users/username/repos"
  constructor(private http:HttpClient ) {

   }
   getUser( username: string)
 
  {
  //   https://api.github.com/users/username
  //   https://api.github.com/users/username/repos

  return this.http.get(this.url + username );
  
  
}

getRepo (username:string){
  return this.http.get(this.url + username + "/repos");
}
  

}