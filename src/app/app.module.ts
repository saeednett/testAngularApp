import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './pages/component-name/component-name.component';
import { ComponentName2Component } from './pages/component-name2/component-name2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    ComponentName2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
