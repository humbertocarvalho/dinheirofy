import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { EmailNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { userNamePassword } from './username-password.validator';

@Component({
  templateUrl: './signup.component.html',
  providers: [EmailNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private emailNotTakenValidatorService: EmailNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], this.emailNotTakenValidatorService.checkEmailTaken()],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]]
    });

    this.platformDetectorService.isPlatformBrowser() && this.emailInput.nativeElement.focus();
  }

  signup() {
    if (this.signupForm.valid && !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signUpService.signup(newUser).subscribe(() => this.router.navigate(['']), err => console.log(err));
    }
  }
}
