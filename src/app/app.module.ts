import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// First party dependency imports
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormMakingService } from './form-making.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [FormMakingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
