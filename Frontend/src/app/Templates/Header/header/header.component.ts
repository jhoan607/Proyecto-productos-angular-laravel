import { Component, OnInit, RootRenderer } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService} from 'src/app/Service/login/authentication.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, public auth: AuthenticationService){}

  public opened = false;
  ngOnInit() {
  }

  cerrarSesion(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Quieres cerrar sesión!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.auth.logout();
        Swal.fire(
          'Perfecto!',
          'Sesión cerrada exitosamente.',
          'success'
        )
        this.router.navigate(["/login"]);
      }
      })

  
}

}
 