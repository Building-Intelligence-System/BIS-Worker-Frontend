import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class  LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      if (this.authService.login(email, password)) {
        this.error = '';
        this.router.navigate(['/qr-scanner']);
      } else {
        this.error = 'Invalid email or password';
      }
    } else {
      this.error = 'Please fill out the form correctly';
    }
  }
}
