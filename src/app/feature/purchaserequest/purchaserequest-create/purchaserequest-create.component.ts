import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { User } from '@model/user';
import { UserService } from '@svc/user.service';
import { SystemService } from '@svc/system.service';


@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

	title: string = 'Create a Purchase Request';

	resp: any;

	purchaserequest: PurchaseRequest = new PurchaseRequest();

	users: User[];	

   compareFn(u1: number, u2: number) {
    return u1 == u2;
  } 

  constructor(private PurchaserequestSvc: PurchaserequestService,
              private UserSvc: UserService,
              private SysSvc: SystemService,
              private router: Router) { }

    create() {
    console.log(this.purchaserequest);
    //this.purchaserequest.DateNeeded = new Date(this.purchaserequest.DateNeeded).toISOString();
    this.PurchaserequestSvc.Add(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
      });
  }

  ngOnInit() {
    this.UserSvc.List()
      .subscribe(users => this.users = users);
    if(this.SysSvc.data.user.loggedIn) {
      this.purchaserequest.UserID = this.SysSvc.data.user.instance.Id;
      this.purchaserequest.UserName = this.SysSvc.data.user.instance.UserName;
    } else {
      console.error("User not logged in.");
    }
  }

}
