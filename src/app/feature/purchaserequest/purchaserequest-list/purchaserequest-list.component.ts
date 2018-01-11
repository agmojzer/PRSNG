import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { SystemService } from '@svc/system.service';
import { LogService } from '@svc/log.service';
import { UserService } from '@svc/user.service';
import { User } from '@model/user';
import { StatusService } from '@svc/status.service';
import {Status } from '@model/status';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {

	title: string = 'Purchase Request List';
	selectedSortKey: string = 'Id'; //must match the property in the purchaserequest.ts under model
	sortDesc: string = 'asc';
	sortKeys: string[] = PurchaseRequest.sortableKeys;
	purchaserequests: PurchaseRequest[];

  constructor(private PurchasereqestSvc: PurchaserequestService,
              private SysSvc: SystemService,
              private LogSvc: LogService,
              private UserSvc: UserService,
              private StatusSvc: StatusService
              ) { }

  ngOnInit() {
  	this.PurchasereqestSvc.List()
  		.subscribe(purchaserequests => {
  			this.purchaserequests = purchaserequests;
        this.addUserName(this.purchaserequests)
  			console.log(purchaserequests);
        this.addStatus(this.purchaserequests)
  		;})
  }

  addUserName(purchreqs: PurchaseRequest[]){
    for (let purchreq of purchreqs){
      this.UserSvc.Get(purchreq.UserID)
        .subscribe(users => {
         purchreq.UserName = users[0].UserName;
         console.log ("users", users);
       });
    }
  }

  addStatus(purchreqs: PurchaseRequest[]){
    for (let purchreq of purchreqs){
      this.StatusSvc.Get(purchreq.StatusID)
        .subscribe(stati => {
         purchreq.Status = stati[0].Description;
         console.log ("status", stati);
       });
    }
  }

}
