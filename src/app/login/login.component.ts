import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:HardcodedAuthenticationService) { }
  username: String
  password: String
  errorFlag:boolean
  ngOnInit() {
  }
  clickFunc(){
      if(this.service.authenticate(this.username,this.password)){
        this.errorFlag=false;
        this.router.navigate(['welcome',this.username]);
          }
          else{
            this.errorFlag=true;
          }
    
    

  }

}
