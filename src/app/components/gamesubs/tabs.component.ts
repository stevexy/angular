import {
  Component,
  QueryList,
  AfterContentInit,
  ContentChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from './tab.component';

@Component({
  selector: 'tabset',
  template: require('./tabs.component.html'),
  styles: [require('./tabs.component.css')]
})
export class Tabset implements AfterContentInit {
  @ContentChildren(Tab) tabs: QueryList<Tab>;

  constructor() {
  }

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: Tab) {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
    console.log(tab);
  }
}



