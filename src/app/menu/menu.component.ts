import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userLoggedIn : boolean ;
  constructor(private service:HardcodedAuthenticationService) { }

  ngOnInit() {
    //this.userLoggedIn = this.service.isUserLoggedIn();
  }

}
