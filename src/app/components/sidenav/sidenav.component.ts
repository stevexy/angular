import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuitem';
// import { HeroService } from './hero.service';



const MENULIST: MenuItem[] = [
  { id: 11, name: '网络游戏' },
  { id: 12, name: '单机游戏' },
  { id: 13, name: '上传管理' },
  { id: 14, name: '收益管理' },
  { id: 15, name: '其他内容' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Component({
  selector: 'sidenav',
  template: require('./sidenav.component.html'),
  styles: [ require('./sidenav.component.css'), ]
})


export class SideNavComponent implements OnInit {
  menulist = MENULIST;
  // heroes: Hero[] = [];
  // constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    // this.heroService.getHeroes()
      // .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}