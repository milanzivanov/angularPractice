import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {

  lat = 46.0500000;
  lng = 20.1000000;
  locationChosen = false;

  constructor() { }

  ngOnInit() {
  }

  onChoseLocation(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

}
