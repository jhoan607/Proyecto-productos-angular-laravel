import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from 'src/app/Service/users/users.service';
import {User} from 'src/app/Models/User';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  constructor(private service: UsersService,private formBuilder: FormBuilder) { }

  @ViewChild('btnCloseAdd', {static: true}) btnCloseAdd: ElementRef;
  @ViewChild('btnCloseUpdate', {static: true}) btnCloseUpdate: ElementRef;

  admin: User = new User;
  admins: User[];
  filterPost="";
  pageActual=1;

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
    this.service.getAdmins()
    .subscribe(data =>{
      this.admins = data;
    })

  }

  limpiar(){
    this.adminForm.reset();
  }

  Save(admin: User){
    this.service.registerAdmin(admin)
    .subscribe(data =>{
      this.ngOnInit();
      Swal.fire('Registro Exitoso!', 'Administrador agregado correctamente.', 'success');
      this.adminForm.reset();
      this.btnCloseAdd.nativeElement.click();
    })
  }

  Editar(admin:User):void {
    
    localStorage.setItem("id",admin.id.toString());
    //this.ngOnInit();
    this.VerInformacion();
  }

  VerInformacion(){
    let id=localStorage.getItem("id");
    this.service.getAdminId(+id)
    .subscribe(data=>{
      this.admin=data;
    })
  }


  Update(admin:User){
    this.service.updateAdmin(admin)
    .subscribe(data=>{
      this.ngOnInit();
      this.admin=data;
      Swal.fire({
        title: 'Actualizació Exitosa!',
        text: "Administrador actualizada correctamente",
        icon: 'success',
      })
      this.btnCloseUpdate.nativeElement.click();
    })
  }



  Delete(admin:User){
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.service.deleteAdmin(admin)
        .subscribe(data=>{
          this.admins=this.admins.filter(p=>p!==admin);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      })
}
})

}

}
