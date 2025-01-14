import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loggedInClick1: boolean = false;
  signedUpClick2: boolean = false;

  recuponLoggedInClick(response: boolean){
    this.loggedInClick1 = response;
    this.signedUpClick2 = false;
    console.log('loggin value: ', this.loggedInClick1);
  }

  recuponSignedUpClick(response: boolean){
    this.signedUpClick2 = response;
    this.loggedInClick1 = false;

    console.log('signup value: ', this.signedUpClick2);

  }

  recuponHomeClick(response: boolean){
    this.signedUpClick2 = response;
    this.loggedInClick1 = response;

  }

}
