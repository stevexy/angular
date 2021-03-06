import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProfitItem } from './dataitem';
import { TabmenuService } from './tabmenu.service';

import 'rxjs/add/operator/switchMap';

const profitdata: ProfitItem[] = [
  { id: "1", name: "张三", age: 22, phoneNum: "18298705786" },
  { id: "2", name: "王五", age: 28, phoneNum: "18456705786" },
  { id: "3", name: "张三", age: 29, phoneNum: "18291235786" },
  { id: "4", name: "蔡雄", age: 22, phoneNum: "18298705786" },
  { id: "5", name: "张三", age: 26, phoneNum: "18759705786" },
  { id: "6", name: "张楚", age: 22, phoneNum: "18298705786" }
]

const profitdata2: ProfitItem[] = [
  { id: "1", name: "阿萨德", age: 22, phoneNum: "18298705786" },
  { id: "2", name: "牛逼", age: 28, phoneNum: "18456705786" },
  { id: "3", name: "张三", age: 29, phoneNum: "18291235786" },
  { id: "4", name: "蔡雄", age: 22, phoneNum: "18298705786" },
  { id: "5", name: "张三", age: 26, phoneNum: "18759705786" },
  { id: "6", name: "张楚", age: 22, phoneNum: "18298705786" },
  { id: "1", name: "阿萨德", age: 22, phoneNum: "18298705786" },
  { id: "2", name: "牛逼", age: 28, phoneNum: "18456705786" },
  { id: "3", name: "张三", age: 29, phoneNum: "18291235786" },
  { id: "4", name: "蔡雄", age: 22, phoneNum: "18298705786" },
  { id: "5", name: "张三", age: 26, phoneNum: "18759705786" },
  { id: "6", name: "张楚", age: 22, phoneNum: "18298705786" },
  { id: "1", name: "阿萨德", age: 22, phoneNum: "18298705786" },
  { id: "2", name: "牛逼", age: 28, phoneNum: "18456705786" },
  { id: "3", name: "张三", age: 29, phoneNum: "18291235786" },
  { id: "4", name: "蔡雄", age: 22, phoneNum: "18298705786" },
  { id: "5", name: "张三", age: 26, phoneNum: "18759705786" },
  { id: "6", name: "张楚", age: 22, phoneNum: "18298705786" },
  { id: "1", name: "阿萨德", age: 22, phoneNum: "18298705786" },
  { id: "2", name: "牛逼", age: 28, phoneNum: "18456705786" },
  { id: "3", name: "张三", age: 29, phoneNum: "18291235786" },
  { id: "4", name: "蔡雄", age: 22, phoneNum: "18298705786" },
  { id: "5", name: "张三", age: 26, phoneNum: "18759705786" },
  { id: "6", name: "张楚", age: 22, phoneNum: "18298705786" },
  { id: "1", name: "阿萨德", age: 22, phoneNum: "18298705786" },
  { id: "2", name: "牛逼", age: 28, phoneNum: "18456705786" },
  { id: "3", name: "张三", age: 29, phoneNum: "18291235786" },
  { id: "4", name: "蔡雄", age: 22, phoneNum: "18298705786" },
  { id: "5", name: "张三", age: 26, phoneNum: "18759705786" },
  { id: "6", name: "张楚", age: 22, phoneNum: "18298705786" },
  { id: "1", name: "阿萨德", age: 22, phoneNum: "18298705786" },
  { id: "2", name: "牛逼", age: 28, phoneNum: "18456705786" },
  { id: "3", name: "张三", age: 29, phoneNum: "18291235786" },
  { id: "4", name: "蔡雄", age: 22, phoneNum: "18298705786" },
  { id: "5", name: "张三", age: 26, phoneNum: "18759705786" },
]

@Component({
  selector: 'profitcheck',
  template: require('./profitcheck.component.html'),
  styles: [require('./profitcheck.component.css'),]
})


export class profitcheckComponent implements OnInit {
  lists = profitdata;
  // constructor(
  //   private route: ActivatedRoute,
  //   private location: Location
  // ) { }

  constructor(
    private tabmenuService: TabmenuService
  ) { }

  ngOnInit(): void {
    // var gid:number=0;
    // this.route
    //   .queryParams
    //   .map(params => gid = params['id'] );
    // console.log("--------------"+gid);

    if (this.tabmenuService.currentMenuItem != null) {
      this.refresh();
    }

    this.tabmenuService.obserCurrentMenuItem().subscribe(value => {
      this.refresh();
    });
  }

  private refresh() {
    var tid = this.tabmenuService.currentMenuItem.id;
    console.log("--------------" + tid);
    if (tid == 1) {
      this.lists = profitdata;
    }
    else {
      this.lists = profitdata2;
    }

    // do update 
  }

}