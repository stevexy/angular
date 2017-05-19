import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <div>
      <sidemenu-demo>
      </sidemenu-demo>
    </div>
  `,
  styles: [require('bootstrap/dist/css/bootstrap.min.css')]
})
export class AppComponent { }
