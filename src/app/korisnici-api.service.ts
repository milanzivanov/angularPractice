import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './interfaceRoot';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class KorisniciApiService {

  constructor(private _http: HttpClient) { }

  public url = 'https://jsonplaceholder.typicode.com/users';

  // pregled svih korisnika
  // with Observable
  // getUsers(): Observable<RootObject[]> {
  //   return this._http.get<RootObject[]>(this.url)
  //              .map(res => res);
  // }

  // with promise
  async getUsers(): Promise<RootObject[]> {
    return this._http.get(this.url)
               .map(res => res as RootObject[]).toPromise();
  }



}
