import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/authServices/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formule: FormGroup;
  // loggedInOnClick: boolean = false;
  @Output() towardHeaderOnClick = new EventEmitter<boolean>();

  constructor(private router: Router,fb:FormBuilder,private loginService:LoginService ) {
    this.formule = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    
  }

  onloggedInOnClick(loggedInOnClick: boolean){
    // this.loggedInOnClick=true;
    this.towardHeaderOnClick.emit(loggedInOnClick);
    console.log('login page onClick value: ', loggedInOnClick);
    this.router.navigate(['/auth/ticket'])
  }


}
