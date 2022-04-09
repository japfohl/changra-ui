import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChangraModule, ChangraStylePropsDirectiveModule } from 'changra-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Changra UI Imports
    ChangraModule.forRoot(),
    ChangraStylePropsDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
