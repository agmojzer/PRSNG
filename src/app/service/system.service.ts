import { Injectable } from '@angular/core';
import { User } from '@model/user';


@Injectable()
export class SystemService {

	data = {
		about: 'System Service',
		user: {
			loggedIn: false,
			instance: null
		},
		displayMenu: true
	};

	get fullname() { 
		return this.data.user.loggedIn 
						? this.data.user.instance.FirstName + " " + this.data.user.instance.LastName
						: "Not Logged in"; 
	}

	get isAdmin() { return this.data.user.instance.Admin; }
	get isReviewer() { return this.data.user.instance.Reviewer; }
	get debug() { return this.data; }

  constructor() { }

}
