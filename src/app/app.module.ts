import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { KorisniciApiService } from './korisnici-api.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GmapComponent } from './gmap/gmap.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLHw2NWSH7JHcriI-H1yfsOegUbpmdNnU'
    })
  ],
  providers: [KorisniciApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
