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
import { TokenService } from '../../../../core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  err: string;
  message: string;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _authService: AuthService,
    private _tokenService: TokenService
  ) {
    this.buildForm();
  }

  get f(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login(): void {
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this._authService.login(credentials).subscribe(
      (res) => {
        this._tokenService.setToken(res.token);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.err = err.error.message;
      }
    );
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
