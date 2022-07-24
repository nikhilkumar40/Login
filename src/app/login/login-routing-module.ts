import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{ path: '', component: LoginpageComponent },
{ path:'forget-password', component:ForgetPasswordComponent},
{path:'sign-up', component:SignUpComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
