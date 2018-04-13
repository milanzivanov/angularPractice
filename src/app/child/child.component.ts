import { Component, OnInit, Input } from '@angular/core';
import { RootObject } from '../interfaceRoot';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() users: RootObject;

  constructor() { }

  ngOnInit() {
  }

}
