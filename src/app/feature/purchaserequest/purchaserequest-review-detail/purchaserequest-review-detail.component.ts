import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PurchaseRequest } from '@model/purchaserequest';
import { Status } from '@model/status';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { StatusService } from '@svc/status.service';

@Component({
  selector: 'app-purchaserequest-review-detail',
  templateUrl: './purchaserequest-review-detail.component.html',
  styleUrls: ['./purchaserequest-review-detail.component.css']
})
export class PurchaserequestReviewDetailComponent implements OnInit {

	title: string = "Review Purchase Request Details";

	id: string;
	resp: any;

	purchaserequest: PurchaseRequest;
	stati : Status[];

	approve(){
		this.purchaserequest.Status = this.getStatus("APPROVED");
		this.update();
	}

	update(){
		this.PurchaseRequestSvc.Update(this.purchaserequest)
			.subscribe(resp => {
				this.resp = resp;
				console.log("PurchaseRequest-Review:", this.resp);
				this.router.navigate(['/purchaserequest/review/list']);
			});
	}

	reject(){
		this.purchaserequest.Status = this.getStatus("REJECTED");
		this.update;
	}

	getStatus(description: string): string {
		for (let status of this.stati){
			if(status.Description === description){
				return status.Description;
			}
		}
	}

  constructor(private PurchaseRequestSvc: PurchaserequestService,
  				private router: Router,
  				private StatusSvc: StatusService,
  				private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	this.PurchaseRequestSvc.Get(this.id)
  		.subscribe(purchaserequests => {
  			this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
  			console.log(this.purchaserequest);
  		});
  		this.StatusSvc.List()
  			.subscribe(stati => {
  				this.stati = stati;
  			});
  }

}
