import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
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
  menulist = MENULIST;

  selectedItem: MenuItem;  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    
  }
  onSelect(mi: MenuItem): void {
    if (this.selectedItem === mi) {
      return;
    }
    this.selectedItem = mi;
    console.log("click click 0000"+mi.id)
    this.router.navigate(['./formgame',mi.id],{ relativeTo: this.route });
  }  

}