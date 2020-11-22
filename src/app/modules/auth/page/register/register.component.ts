import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../../../core/services/auth.service';

// Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  err: string;
  message: string;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.buildForm();
  }

  get f(): { [p: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  register(): void {
    const credentials = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };

    this._authService.register(credentials).subscribe(
      (res) => {
        this.snackBar.open(res.message, 'OK', {
          duration: 3000,
        });
        this.router.navigate(['/auth/login']);
      },
      (err) => {
        this.err = err.error.message;
      }
    );
  }

  private buildForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      checkbox: [false, Validators.required],
    });
  }
}
