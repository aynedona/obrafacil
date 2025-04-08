import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  login() {
    if (this.loginForm.valid) {
      // Implement your authentication logic here
      console.log("Login data:", this.loginForm.value)
      // Navigate to home page after successful login
      // this.router.navigate(['/home']);
    } else {
      this.markFormGroupTouched(this.loginForm)
    }
  }

  resetPassword() {
    this.router.navigate(["/reset-password"])
  }

  createAccount() {
    this.router.navigate(["/register"])
  }

  // Helper method to trigger validation on all form fields
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
    })
  }

  ngOnInit() {
  }

}
