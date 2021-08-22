import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthenticationService, TokenPayLoad } from 'src/app/Service/login/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private auth: AuthenticationService, private router: Router,private formBuilder: FormBuilder ) { }


  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  registerForm = this.formBuilder.group({

    name: ['', {
      validators: [Validators.required,Validators.minLength(5)]
        }],

        email: ['', {
          validators: [Validators.required,Validators.minLength(5), Validators.pattern(this.emailPattern)]
            }],

            password: ['', {
              validators: [Validators.required,Validators.minLength(5)]
                }],

            

   
  });
  
  get name() {return this.registerForm.get('name');}
  get password() {return this.registerForm.get('password');}
  get email() {return this.registerForm.get('email');}





  credentials: TokenPayLoad ={
    id:0,
    name: '',
    email: '',
    password: ''
  }


  register(){
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/login')
      },
      err => {
        console.error(err)
      }
    )
  }

}
