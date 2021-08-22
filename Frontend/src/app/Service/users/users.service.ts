import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable, of} from 'rxjs';
import{map} from 'rxjs/operators';
import{Router} from '@angular/router';
import {User} from './../../Models/User';



interface TokenResponse{
  token:string
}

@Injectable()
export class UsersService {

  constructor(private http:HttpClient, private router:Router){}

  Url='http://127.0.0.1:8000/api/admin';

   getAdmins(){
    return this.http.get<User[]>(this.Url)
  }

    registerAdmin(admin: User): Observable<any>{
    return this.http.post<User>(this.Url, admin)

}
     getAdminId(id:number){
       return this.http.get<User>(this.Url+"/"+id)

     }

     updateAdmin(admin:User){
      return this.http.put<User>(this.Url+"/"+admin.id,admin);
    }

     deleteAdmin(admin:User){
     return this.http.delete<User>(this.Url+"/"+admin.id);
}

UrlUser='http://127.0.0.1:8000/api/users';

getUsers(){
  return this.http.get<User[]>(this.UrlUser)
}
}
