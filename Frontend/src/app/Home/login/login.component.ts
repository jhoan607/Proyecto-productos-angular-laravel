import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService, TokenPayLoad } from 'src/app/Service/login/authentication.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {UsersService} from 'src/app/Service/users/users.service';
import {User} from 'src/app/Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  loginForm = new FormGroup({

    password : new FormControl('',[Validators.required]),

    email : new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)])

  });
  get password() {return this.loginForm.get('password');}
  get email() {return this.loginForm.get('email');}



  credentials: TokenPayLoad ={
    id:0,
    name: '',
    email: '',
    password: ''
    }

  constructor(private auth: AuthenticationService, private router: Router, private service: UsersService) { }
  
  admins:User[];
  correos:string;

  

  login() {
    
    this.service.getAdmins()
    .subscribe(data =>{
      this.admins = data;
      this.auth.login(this.credentials).subscribe(
        () => {


      for (let admin of this.admins){

            if(this.credentials.email !== admin.email){
              this.router.navigateByUrl('/profile')
            }else{
              this.router.navigateByUrl('/home')
            }
            Swal.fire('Hola bienvenido ')
         
          }
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Correo y/o contraseña incorrecta!'
          })
          console.error(err)
        }
        )
        })
  }

}


/*
credentials: TokenPayLoad ={
    id:0,
    name: '',
    email: '',
    password: '',
    rol: 0
    }

  constructor(private auth: AuthenticationService, private router: Router) { }
   rol:number;
  login(){
    
    this.auth.login(this.credentials).subscribe(
      () => {
        Swal.fire('Hola bienvenido ')
        this.router.navigateByUrl('/profile')
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Correo y/o contraseña incorrecta!'
        })
        console.error(err)
        
      }
    )
  }
*/

