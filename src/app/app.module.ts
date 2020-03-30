import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GitHubServiceService } from './services/git-hub-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './cuentan/register.component';

var firebaseConfig = {
  apiKey: "AIzaSyAc1UbTOb286B7kMdjN7ak3DChJRZ8Jkuc",
  authDomain: "mirecetas-4a30b.firebaseapp.com",
  databaseURL: "https://mirecetas-4a30b.firebaseio.com",
  projectId: "mirecetas-4a30b",
  storageBucket: "mirecetas-4a30b.appspot.com",
  messagingSenderId: "400094603174",
  appId: "1:400094603174:web:2b2963c5a633d2ad91d167"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [GitHubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
