import { Component } from '@angular/core';

import { MenuModule } from './menu/menu.module';
// import * as menu from './menu/menu';
// import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
