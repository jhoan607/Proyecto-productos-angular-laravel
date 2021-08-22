import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {UsersService} from 'src/app/Service/users/users.service';
import {User} from 'src/app/Models/User';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private service: UsersService,private formBuilder: FormBuilder) { }

  @ViewChild('btnCloseAdmin', {static: true}) btnCloseAdmin: ElementRef;


  admin: User = new User;

  adminForm = this.formBuilder.group({

    name: ['', {
        validators: [Validators.required]
          }],
          rol: ['', {
        validators: [Validators.required]
          }],
          email: ['', {
            validators: [Validators.required]
              }],
              password: ['', {
                validators: [Validators.required]
                  }],
  
     
    });
  
    get name() {return this.adminForm.get('name');}
    get email() {return this.adminForm.get('email');}
    get password() {return this.adminForm.get('password');}
    get rol() {return this.adminForm.get('rol');}

  ngOnInit() {
  }

  Save(admin: User){
    this.service.registerAdmin(admin)
    .subscribe(data =>{
      this.ngOnInit();
      Swal.fire('Registro Exitoso!', 'Administrador agregado correctamente.', 'success');
      this.adminForm.reset();
      this.btnCloseAdmin.nativeElement.click();
    })
  }

}
