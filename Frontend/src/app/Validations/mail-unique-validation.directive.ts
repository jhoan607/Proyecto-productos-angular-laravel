import { Directive, Injectable } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { UsersService } from '../Service/users/users.service';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[emailUnico]',
  providers: [{  provide: NG_ASYNC_VALIDATORS, useExisting: MailUniqueValidationDirective, multi: true }]
})
export class MailUniqueValidationDirective implements AsyncValidator {

  constructor(private service: UsersService ) { }

  validate(control: import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> {
    const email = control.value;
    return this.service.getUsers().pipe(
      map(emailArr => {
        if (emailArr.indexOf(email) !== -1){
        
          return {emailUnico: true};
        }
        return null;
      })
    );
  }

}

/*
@Injectable({providedIn: 'root'})
export class MailUniqueValidationService implements AsyncValidator  {
  constructor(private service: UsersService ) { }

 validate(control: import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors>
 {
   const mailUniqueValidationDirective = new MailUniqueValidationDirective(this.service);
    return mailUniqueValidationDirective.validate(control);
 }
}
*/
