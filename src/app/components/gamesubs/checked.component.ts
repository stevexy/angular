import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class ComponentItem {
  constructor(
    public id: string,
    public name: string,
    public ultime: string) { }
}


const profitdata: ComponentItem[] = [
  { id: "1", name: "张三", ultime: "2008-02-14", },
  { id: "2", name: "王五", ultime: "2008-02-14", },
  { id: "3", name: "张三", ultime: "2008-02-14", },
  { id: "4", name: "蔡雄", ultime: "2008-02-14", },
  { id: "5", name: "张三", ultime: "2008-02-14", },
  { id: "6", name: "张楚", ultime: "2008-02-14", }
]

@Component({
  selector: 'checkedcomp',
  template: require('./checked.component.html'),
  styles: [require('./checked.component.css'),]
})
export class CheckedComp {
  lists = profitdata;
  selectedItem: ComponentItem;

  constructor(
    private router: Router
  ) { }

  onClick(mi: ComponentItem): void {

    this.selectedItem = mi;

    console.log("click" + mi.name);
    this.router.navigate(['main/gamesubs/detail', mi.id], )

  }

  onBtnClick(mi: ComponentItem, event: MouseEvent): void {

    // this.selectedItem = mi;

    console.log("button click" + mi.name);
    this.router.navigate(['main/gamesubs/detailedit', mi.id], )
//    this.router.navigate(['main/gamesubs/detail', mi.id], )
    event.stopPropagation();
    //让消息不再向下传递

  }

}