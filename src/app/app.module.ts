import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChangraModule } from './changra/changra.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ChangraModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
