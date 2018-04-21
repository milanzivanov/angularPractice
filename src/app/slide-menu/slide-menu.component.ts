import { Component, OnInit } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {

  constructor(private popup: Popup) { }

  ngOnInit() {
  }

  ClickButton() {

    this.popup.options = {

      // header: 'Your custom header',
      color: 'indianred', // red, blue....
      widthProsentage: 50, // The with of the popou measured by browser width
      // animationDuration: 1, // in seconds, 0 = no animation
      // showButtons: true, // You can hide this in case you want to use custom buttons
      // confirmBtnContent: 'OK', // The text on your confirm button
      // cancleBtnContent: 'Cancel', // the text on your cancel button
      confirmBtnClass: 'btn btn-default', // your class for styling the confirm button
      cancleBtnClass: 'btn btn-default', // you class for styling the cancel button
      animation: 'fadeInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'

    };

    this.popup.show();
  }
}
