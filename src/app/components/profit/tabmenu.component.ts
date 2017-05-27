import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuItem } from './menuitem';
import { ContentChildren, QueryList } from '@angular/core';
import { TabmenuService } from './tabmenu.service';

import 'rxjs/add/operator/switchMap';

const MENULIST: MenuItem[] = [
  { id: 1, name: '组件收益', disabled: false },
  { id: 2, name: '游戏收益', disabled: false },
];


@Component({
  selector: 'tabmenu',
  // providers: [
  //   TabmenuService
  // ],
  template: require('./tabmenu.component.html'),
  styles: [require('./tabmenu.component.css'),]
})


export class tabmenuComponent implements OnInit {
  @ContentChildren(MenuItem) li: QueryList<MenuItem>;

  menulist = MENULIST;

  selectedItem: MenuItem;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private tabmenuService: TabmenuService
  ) { }
  ngOnInit(): void {
  }

  ngAfterContentInit() {
    let activeMenu = this.menulist.filter((mitem) => mitem.disabled);
    // if there is no active tab set, activate the first
    if (activeMenu.length === 0) {
      this.onSelect(this.menulist[0]);
    }
  }

  onSelect(mi: MenuItem): void {
    if (this.tabmenuService.currentMenuItem == mi) {
      return;
    }

    this.tabmenuService.currentMenuItem = mi;


    // if (this.selectedItem === mi) {
    //   return;
    // }
    this.selectedItem = mi;
    console.log("click click 0000"+this.router.url)

    // this.router.navigate(['profixs/formgame',mi.id],);
  }

}