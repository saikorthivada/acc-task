import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PreTestComponent } from './shared/layouts/pre-test/pre-test.component';
import { PostTestComponent } from './shared/layouts/post-test/post-test.component';
import { NavBarComponent } from './shared/layouts/nav-bar/nav-bar.component';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyAcU4YJj5Ab0rVL6YV97fFNLr41prtSzIc',
  authDomain: 'accenture-challenge-31537.firebaseapp.com',
  databaseURL: 'https://accenture-challenge-31537.firebaseio.com',
  projectId: 'accenture-challenge-31537',
  storageBucket: '',
  messagingSenderId: '1002147353038',
  appId: '1:1002147353038:web:63fb09f8bfa3b64e'
};
@NgModule({
  declarations: [
    AppComponent,
    PreTestComponent,
    PostTestComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
