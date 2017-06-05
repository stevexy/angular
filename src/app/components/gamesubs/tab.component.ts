import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tab',
  template: require('./tab.component.html'),
    styles:[
  `.tab-pane {
  display: none;
  }
  .tab-pane.active {
    display: block;
  }
  `]
})
export class Tab {
  @Input() title: string;
  active: boolean = false;
  name: string;
}