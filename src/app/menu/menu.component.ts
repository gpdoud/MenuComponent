import { Component, OnInit } from '@angular/core';

import { MenuData } from './menu.data';
import { Menu } from './menu';

@Component({
	selector: 'menu-comp'
	,templateUrl: './menu.component.html'
	,styleUrls: ['./menu.component.css']
})

export class MenuComponent {

	menus: Menu[];

	constructor() {}

	ngOnInit() {

		this.menus = new MenuData().menus; 
		console.log(this.menus);
	}
}