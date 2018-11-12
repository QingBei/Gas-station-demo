import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { GasChargeComponent } from './gas-charge/gas-charge.component';
import { GasWithdrawComponent } from './gas-withdraw/gas-withdraw.component';
import { GasAboutComponent } from './gas-about/gas-about.component';

@NgModule({
  declarations: [
    AppComponent,
    GasChargeComponent,
    GasWithdrawComponent,
    GasAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
