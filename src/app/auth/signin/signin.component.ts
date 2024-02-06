import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  });

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signin(this.authForm.value).subscribe({
      next: response => {
        this.router.navigateByUrl('/home/account-created');
      },
      error: ({ error }) => {
        if (error.username || error.password) {
          this.authForm.setErrors({ credentials: true });
        } else if (!error.status) {
          this.authForm.setErrors({ noConnection: true });
        } else {
          this.authForm.setErrors({ unknownError: true });
        }
      }
    });
  }
}
