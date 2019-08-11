import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PreTestComponent } from './shared/layouts/pre-test/pre-test.component';
import { PostTestComponent } from './shared/layouts/post-test/post-test.component';
import { NavBarComponent } from './shared/layouts/nav-bar/nav-bar.component';
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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
