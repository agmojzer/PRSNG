export class Menu {
	display: string;
	href: string;
	tooltip: string;
	hidden: boolean;

	constructor(display: string = '', href: string = '', tooltip: string = '', hidden: boolean = false)
	{
				this.display=display;
				this.href=href;
				this.tooltip=tooltip;
				this.hidden=hidden;
	}
}