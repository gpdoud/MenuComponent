export class Menu {
	display: string;
	href: string;
	visible: boolean;
	tooltip: string;

	constructor(display: string, href: string, visible: boolean, tooltip: string) {
		this.display = display;
		this.href = href;
		this.visible = visible;
		this.tooltip = tooltip;
	}
}