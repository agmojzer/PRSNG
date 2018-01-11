import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	title: string = 'User Detail';

	id: string;
	resp: any;

	user: User;

	remove(){
		console.log("this.user.id", this.user.Id);
		this.UserSvc.Delete(this.user.Id)
			.subscribe(resp => {
				this.resp = resp;
				console.log("User-Detail-Remove:", this.resp);
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
