import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AtthemoneyComponent } from './atthemoney/atthemoney.component';
import { DefaultComponent } from './default/default.component';
import { ImpliedvolatilityComponent } from './impliedvolatility/impliedvolatility.component';
import { OpeninterestComponent } from './openinterest/openinterest.component';
import { PremiumdecayComponent } from './premiumdecay/premiumdecay.component';
import { PutcallratioComponent } from './putcallratio/putcallratio.component';
import { SupportresistanceComponent } from './supportresistance/supportresistance.component';
import { VixComponent } from './vix/vix.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AtthemoneyComponent, DefaultComponent, ImpliedvolatilityComponent, OpeninterestComponent, PremiumdecayComponent, PutcallratioComponent, SupportresistanceComponent, VixComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
