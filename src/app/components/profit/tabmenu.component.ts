import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MenuItem } from './menuitem';

import 'rxjs/add/operator/switchMap';

const MENULIST: MenuItem[] = [
  { id: 1, name: '组件收益', disabled: false },
  { id: 2, name: '游戏收益', disabled: false },
];


@Component({
  selector: 'tabmenu',
  template: require('./tabmenu.component.html'),
  styles: [require('./tabmenu.component.css'),]
})


export class tabmenuComponent implements OnInit {
  clickMessage = 'this is profitcheck';
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
  }

}