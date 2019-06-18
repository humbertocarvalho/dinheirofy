import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';

import { debounceTime, switchMap, map, first, tap } from 'rxjs/operators';

@Injectable()
export class EmailNotTakenValidatorService {
  constructor(private signUpService: SignUpService) {}

  checkEmailTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName => this.signUpService.checkEmailTaken(userName)))
        .pipe(map(isTaken => (isTaken ? { emailTaken: true } : null)))
        .pipe(tap(r => console.log(r)))
        .pipe(first());
    };
  }
}
