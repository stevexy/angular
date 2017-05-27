import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'logindialog',
  template: require('./login.component.html'),
  styles: [require('./login.component.css'),]
})


export class LoginDialogComponent implements OnInit {
  clickMessage = 'this is login dialog';
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