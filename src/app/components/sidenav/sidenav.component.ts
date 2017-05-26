import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuitem';
// import { HeroService } from './hero.service';
import { ContentChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';


const MENULIST: MenuItem[] = [
  { id: 1, name: '上传组件管理', disabled: false },
  { id: 2, name: '单机游戏管理', disabled: false },
  { id: 3, name: '网络游戏管理', disabled: false },
  { id: 4, name: '收益管理', disabled: false },
  // { id: 15, name: '其他内容', disabled: false },
];


@Component({
  selector: 'sidenav',
  template: require('./sidenav.component.html'),
  styles: [require('./sidenav.component.css'),]
})


export class SideNavComponent implements OnInit {
  @ContentChildren(MenuItem) li: QueryList<MenuItem>;

  menulist = MENULIST;

  selectedItem: MenuItem;

  clickMessage = '';

  // heroes: Hero[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.heroService.getHeroes()
    // .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngAfterContentInit() {
    let activeMenu = this.menulist.filter((mitem) => mitem.disabled);
    // if there is no active tab set, activate the first
    if (activeMenu.length === 0) {
      // this.onSelect(this.menulist[0]);
    }
  }

  onSelect(mi: MenuItem): void {
    if (this.selectedItem === mi) {
      return;
    }
    this.selectedItem = mi;

    if (mi.id == 4)
      this.router.navigate(['/profixs']);
      // app/profit/tabmenu.module
    else
      this.router.navigate(['/contentbox', mi.id]);

  }
}