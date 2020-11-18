import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

// Services
import { HttpService } from '../../../../shared/services/http/http.service';

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
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {
    this.buildForm();
  }

  get f(): { [p: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  register(): void {
    const credentials = this.registerForm.value;

    this.httpService
      .post('/register', credentials)
      .pipe(
        tap((res) => {
          this.message = res.message;
          // localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/dashboard/login']);
        }),
        finalize(() => {
          this.snackBar.open(this.message, 'OK', {
            duration: 3000,
          });
        }),
        catchError((error) => of((this.err = error)))
      )
      .subscribe();
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
