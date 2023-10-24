import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validator/match-password';
import { AuthService } from '../auth.service';
import { SignupCredentials } from '../interface/SignupCredentials.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MatchPassword]
})

export class SignupComponent {
  authForm = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signup(this.authForm.value as SignupCredentials).subscribe(
      response => {
        console.log(response);
        console.log(this.authForm.value);
      },
      error => {
        console.error('registration erorr:', error);
        console.log('Validation errors:', error.error.errors);
      }
    );
  }
}
