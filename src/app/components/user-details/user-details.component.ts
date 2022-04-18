import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  username! : string;
  userDetail : any;
  constructor(private active : ActivatedRoute ,
              private githubService:GithubService , 
              private router : Router) { }

  ngOnInit(): void {
    this.active.params.subscribe(params =>{
      this.username = params['id'];
      console.log("params = ", this.username)
    })
    this.githubService.getUser(this.username).subscribe({
      complete: () => {console.log("succesfully done!")},
      error : () => {
        // we navigate back to the searchpage
        alert("user not found");
        this.router.navigate(['search'])
      },
     
      
      next : (data : any = []) => {
        this.userDetail = data;
        console.log(this.userDetail);
        

      }
    })
    // this.githubService.details(this.details).subscribe({
    //   complete: () => {console.log("succesfully done!")},
    //   error : () =>
  
  }

}
