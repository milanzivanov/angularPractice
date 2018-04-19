import { Component, OnInit } from '@angular/core';
import { KorisniciApiService } from './korisnici-api.service';
import { RootObject } from './interfaceRoot';

import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent implements OnInit {

  // public users = [];
  public users: RootObject[] = [];

  public selected: RootObject;


  color = 'pink';
  size = 16;
  displayText = 'show-class';
  visible = true;

  canSave = true;
  isSpecial = true;

  bgTest: string;

  big = false;

  // open close
  list = false;

   // set a property that holds a random color for our style.
   randomcolor = this.getRandomColor();

  constructor( private _korisnikApi: KorisniciApiService ) {
    // Observable
    // this._korisnikApi.getUsers().subscribe(res => {
    //   console.log(res),
    //   this.users = res;
    // });

  }


// open close

toggle2() {
  console.log('open close');
  // this.displayText = this.visible ? 'show-active' : 'hide-active';

}


  // promise async await
  async ngOnInit() {
    const temp = await this._korisnikApi.getUsers();
    this.users = temp;
  }

  selectedUser(user: RootObject) {
    this.selected = user;
    console.log(user);
  }

  onSave(e): void {
    console.log(e.offsetY);
    console.log(e);
    this.isSpecial = !this.isSpecial;
  }

  // function to get random colors
  public getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // function to set a new random color
  setColor() {
      this.randomcolor = this.getRandomColor();
  }


  // toggled with ngClass
  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

  // tslint:disable-next-line:member-ordering
  menuState = 'out';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
