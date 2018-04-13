import { Component, OnInit } from '@angular/core';
import { KorisniciApiService } from './korisnici-api.service';
import { RootObject } from './interfaceRoot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // public users = [];
  public users: RootObject[] = [];

  public selected: RootObject;


  canSave = true;
  isSpecial = true;

  bgTest: string;

  big = false;

   // set a property that holds a random color for our style.
   randomcolor = this.getRandomColor();

  constructor( private _korisnikApi: KorisniciApiService ) {
    // Observable
    // this._korisnikApi.getUsers().subscribe(res => {
    //   console.log(res),
    //   this.users = res;
    // });

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


}
