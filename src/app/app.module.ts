import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { KorisniciApiService } from './korisnici-api.service';
import { WeatherService } from './weather.service';
import { PopupModule } from 'ng2-opd-popup';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GmapComponent } from './gmap/gmap.component';
import { ChartComponent } from './chart/chart.component';
import { MenuComponent } from './menu/menu.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GmapComponent,
    ChartComponent,
    MenuComponent,
    SlideMenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PopupModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLHw2NWSH7JHcriI-H1yfsOegUbpmdNnU'
    })
  ],
  providers: [KorisniciApiService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
