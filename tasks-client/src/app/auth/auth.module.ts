import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Auth401ErrorInterceptor } from './auth-401-error.interceptor';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SigninComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent,
  ],
  exports: [
    AuthRoutingModule,
    SignupComponent,
    SigninComponent,
  ],
})
export class AuthModule {
}
