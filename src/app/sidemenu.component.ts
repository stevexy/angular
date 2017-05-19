import { Component } from '@angular/core';

@Component({
    selector: 'sidemenu-demo',
    template: `
    <div class="sidemenu-wrapper" [ngStyle]="sidemenuStyle">
        <ng-sidemenu [data]="categoryMap"></ng-sidemenu>
    </div>
        `
    // styleUrls:['../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class SidemenuDemoComponent {
    public sidemenuStyle: any = {
        height: '1400px',
        position: 'relative'
    };
    public categoryMap: { [category: string]: any[] } = {
        sorting: [{
            label: 'insertion',
            text: '测试这个文字'
        }, {
            label: 'selection',
            text: 'Selection Sort'
        }, {
            label: 'bubble',
            text: 'Bubble Sort'
        }, {
            label: 'merge',
            text: 'Merge Sort'
        }, {
            label: 'quick',
            text: 'Quick Sort'
        }, {
            label: 'heap',
            text: 'Heap Sort'
        }],
        search: [{
            label: 'binary search',
            text: 'Binary Search'
        }],
        string: [{
            label: 'edit distance',
            text: 'Edit Distance'
        }, {
            label: 'suffix array',
            text: 'Suffix Array'
        }],
        greey: [{
            label: 'job scheduling',
            text: 'Job Scheduling'
        }],
        graph: [{
            label: 'bfs',
            text: 'Breadth First Search'
        }, {
            label: 'dfs',
            text: '子菜单测试'
        }]
    };
}