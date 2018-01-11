import { Component, OnInit } from '@angular/core';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { SystemService } from '@svc/system.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	title: string = 'User List';
	selectedSortKey: string = 'ID'; //must match the property in the user.ts under model
	sortDesc: string = 'asc';
	sortKeys: string[] = User.sortableKeys;
	users: User[];

  constructor(private UserSvc: UserService,
              private SysSvc: SystemService
             ) { }

  ngOnInit() {
  	this.UserSvc.List()
  		.subscribe(users => {
  			this.users = users;
  			console.log(users);
  		})
  }

}
