import {
    Component
} from '@angular/core';
import { CheckedComp } from './checked.component';
import { UncheckComp } from './unchecked.component';
import { CheckingComp } from './checking.component';
import { FailComp } from './failed.component';
import { UploadComp } from './uploadcomp.component';

@Component({
    selector: 'gamesubs',
    template: require('./gamesubs.component.html'),
})
export class GamesubsComponent {
    tabs: any;
    constructor() {
        this.tabs = [
            { title: '已上架', content: '阿萨德发生发到付', comp: CheckedComp },
            { title: '已审核', content: '已经审核的内容', comp: UncheckComp },
            { title: '审核中', content: '正在审核中', comp: CheckingComp },
            { title: '未审核', content: '还没通过审核列表', comp: FailComp },
            { title: '上传新组建', content: 'upload new component', comp: UploadComp },
        ];
    }
}