import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './http.intercept';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    // AppRoutingModule,
      ReactiveFormsModule,
  HttpClientModule ],
  declarations: [ AppComponent, LoginComponent , WelcomeComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
