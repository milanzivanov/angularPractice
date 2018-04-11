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


}
