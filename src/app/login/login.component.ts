import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
/**
 * Modify the login component and the login template to collect login details and add the validators as necessary
 */
import { AuthenticationService } from "../services/authentication.service";
import { Token } from "@angular/compiler";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm  =  this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {
    // setup the loginform and validators
    if (typeof window !== 'undefined') {
    if(localStorage.getItem('token')) {
        this.router.navigate(['/welcome']);
    }
}
    
  }
  ngOnDestroy() {}

  onSubmit() {
    if(this.loginForm.valid) {
        this.authenticationService.login(this.loginValue().email, this.loginValue().password).subscribe((jwt: any) => {
            if (typeof window !== 'undefined') {
            localStorage.setItem('token', jwt.token)
            this.authenticationService.getUserData();
            this.router.navigate(['/welcome']);
    };
          });
    }
  }
  loginValue() {
    return this.loginForm.value;
  }

  // implement the username validator. Min 6 characters and no digits, special chars
  usernameValidator() {
    return false;
  }

  // implement the password validator
  // Min 1 uppercase, 1 lower case and a digit. Total length >= 8
  passwordValidator() {
    return false;
  }
}
