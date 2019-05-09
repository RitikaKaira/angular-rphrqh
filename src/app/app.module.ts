import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AtthemoneyComponent } from './atthemoney/atthemoney.component';
import { DefaultComponent } from './default/default.component';
import { ImpliedvolatilityComponent } from './impliedvolatility/impliedvolatility.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AtthemoneyComponent, DefaultComponent, ImpliedvolatilityComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
