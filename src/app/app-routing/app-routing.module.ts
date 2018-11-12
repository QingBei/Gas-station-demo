import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasChargeComponent } from '../gas-charge/gas-charge.component';
import { GasWithdrawComponent } from '../gas-withdraw/gas-withdraw.component';
import { GasAboutComponent } from '../gas-about/gas-about.component';

const routes: Routes = [
  { path: 'charge', component: GasChargeComponent},
  { path: 'withdraw', component: GasWithdrawComponent},
  { path: 'others', component: GasAboutComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
