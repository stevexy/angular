import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

var profitdata = [
  { "id": "1", "name": "张三", "age": 22, "phoneNum": "18298705786", "power": 1 },
  { "id": "2", "name": "王五", "age": 28, "phoneNum": "18456705786", "power": 1 },
  { "id": "3", "name": "张三", "age": 29, "phoneNum": "18291235786", "power": 1 },
  { "id": "4", "name": "蔡雄", "age": 22, "phoneNum": "18298705786", "power": 1 },
  { "id": "5", "name": "张三", "age": 26, "phoneNum": "18759705786", "power": 1 },
  { "id": "6", "name": "张楚", "age": 22, "phoneNum": "18298705786", "power": 0 }
]


@Component({
  selector: 'profitcheck',
  template: require('./profitcheck.component.html'),
  styles: [require('./profitcheck.component.css'),]
})


export class profitcheckComponent implements OnInit {
  clickMessage = 'this is profitcheck';
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
  }

}