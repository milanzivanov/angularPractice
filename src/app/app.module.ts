import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { KorisniciApiService } from './korisnici-api.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [KorisniciApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
