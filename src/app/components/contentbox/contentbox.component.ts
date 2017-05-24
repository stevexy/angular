import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'contentbox',
  template: require('./contentbox.component.html'),
  styles: [require('./contentbox.component.css'),]
})


export class ContentComponent implements OnInit {
  clickMessage = 'this is content';
  ngOnInit(): void {
    // this.heroService.getHeroes()
    // .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}