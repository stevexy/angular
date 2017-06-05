import {
    Component
} from '@angular/core';

@Component({
    selector: 'gamesubs',
    template: require('./gamesubs.component.html'),
})
export class GamesubsComponent {
    tabs: any;

    constructor() {
        this.tabs = [
            { title: '已上架', content: '阿萨德发生发到付' },
            { title: '已审核', content: '已经审核的内容' },
            { title: '审核中', content: '正在审核中' },
            { title: '未审核', content: '还没通过审核列表' },
            { title: '上传新组建', content: 'upload new component' },
        ];
    }
}