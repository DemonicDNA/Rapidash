import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlertControllerComponent } from './alert-controller/alert-controller.component';
import { AlertComponent } from './alert/alert.component';
import { ResetComponent } from './reset/reset.component';
import { BitComponent } from './bit/bit.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertControllerComponent,
    AlertComponent,
    ResetComponent,
    BitComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
