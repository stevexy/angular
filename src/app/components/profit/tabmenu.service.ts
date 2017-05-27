import { Injectable } from '@angular/core';

import { Subject, Observable} from 'rxjs/Rx';
import {MenuItem}  from './menuitem';

@Injectable()
export class TabmenuService {
    private _currentMenuItem: MenuItem;
    private currentMenuItemSubject = new Subject<MenuItem>();

    set currentMenuItem(value: MenuItem) {
        this._currentMenuItem = value;
        this.currentMenuItemSubject.next(this._currentMenuItem);
    }

    get currentMenuItem(): MenuItem {
        return this._currentMenuItem;
    }

    obserCurrentMenuItem(): Observable<MenuItem> {
        return this.currentMenuItemSubject.asObservable();
    }
}