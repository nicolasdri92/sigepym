import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpService } from '../../../../shared/services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  err: string;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService
  ) {
    this.buildForm();
  }

  get f(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login(): void {
    const credentials = this.loginForm.value;

    this.httpService
      .post('/login', credentials)
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        }),
        catchError((error) => of((this.err = error)))
      )
      .subscribe();
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      checkbox: false,
    });
  }
}
