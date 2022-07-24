import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing-module';



@NgModule({
  declarations: [
    LoginpageComponent,
    SignUpComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
