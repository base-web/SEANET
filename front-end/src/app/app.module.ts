import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnectModule } from './connect/connect.module';
import { CouponsModule } from './coupons/coupons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConnectModule,
    CouponsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
