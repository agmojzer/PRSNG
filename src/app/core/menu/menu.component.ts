import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';
import { SystemService } from '@svc/system.service';
import { LogService } from '@svc/log.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  displayMenu: boolean = true;
  hideReviewMenuItem: boolean = false; //!this.SysSvc.isReviewer;
  fullname: string = this.SysSvc.fullname;

	menuItems: Menu[] = [
		new Menu('HOME', '/home', 'Home menu item'), 
		new Menu('ABOUT', '/about', 'About menu item'),
    new Menu('USER', '/user/list', 'User menu item'),
    new Menu ('VENDOR', '/vendor/list', 'Vendor menu item'),
    new Menu ('PRODUCT', '/product/list', 'Product menu item'),
    new Menu ('PURCHASE REQUESTS', '/purchaserequest/list', 'Purchaserequest menu item'),
    new Menu ('REVIEW', '/purchaserequest/review/list', 'Purchaserequest review item', this.hideReviewMenuItem),
    new Menu ('LOGIN', '/user/login', 'Login menu item')

 
	];

  constructor(
    private SysSvc: SystemService,
              private LogSvc: LogService) { }

  ngOnInit() {
     console.log("hideReviewMenuItem:", this.hideReviewMenuItem);
  }

}
