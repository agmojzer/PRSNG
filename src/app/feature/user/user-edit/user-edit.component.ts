import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

	title:string = 'User Edit';

	id:string;
	resp:any;

	user: User;

	change(){
		console.log(this.user);
		this.UserSvc.Update(this.user)
			.subscribe(resp => {
				this.resp = resp;
				console.log('User:Change:', this.resp);
				this.router.navigate(['/user/list']);
			});
	}

  constructor(private UserSvc: UserService,
  				private router: Router,
  				private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	this.UserSvc.Get(this.id)
  		.subscribe(users => {this.user = users.length > 0 ? users[0] : null;
  			console.log(this.user);
  		});
  }

}
