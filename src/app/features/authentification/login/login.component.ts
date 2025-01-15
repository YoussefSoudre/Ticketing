import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // loggedInOnClick: boolean = false;
  @Output() towardHeaderOnClick = new EventEmitter<boolean>();

  constructor(private router: Router) {
    
  }

  onloggedInOnClick(loggedInOnClick: boolean){
    // this.loggedInOnClick=true;
    this.towardHeaderOnClick.emit(loggedInOnClick);
    console.log('login page onClick value: ', loggedInOnClick);
    this.router.navigate(['/ticket'])
  }


}
