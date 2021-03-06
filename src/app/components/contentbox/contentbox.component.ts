import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'contentbox',
  template: require('./contentbox.component.html'),
  styles: [require('./contentbox.component.css'),]
})


export class ContentComponent implements OnInit {
  clickMessage = 'this is content';
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.route.params.switchMap((params: Params) =>this.clickMessage = "qqqq" + params['id'])
    .subscribe(()=>0);
  }

  goBack(): void {
    this.location.back();
  }
}