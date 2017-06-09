import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'checkededitcomp',
  template: require('./checkededit.component.html'),
})

export class CheckedEditComp {
      compid:string;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.compid = params['id']).subscribe();
  }

  goBack(): void {
    console.log("go back.........")
    this.location.back();
  }
}