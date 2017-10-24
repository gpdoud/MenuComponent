import { Menu } from './menu';

export class MenuData {

	public menus: Menu[] = [
		new Menu("Home", "/home", true, "Home page")
		,new Menu("About", "/about", true, "About page")
		,new Menu("Help", "/help", true, "Help page")
	];

}