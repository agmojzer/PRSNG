import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '@model/purchaserequest';
import { PurchaserequestService} from '@svc/purchaserequest.service';
import { SystemService } from '@svc/system.service';
import { LogService } from '@svc/log.service';

@Component({
  selector: 'app-purchaserequest-review-list',
  templateUrl: './purchaserequest-review-list.component.html',
  styleUrls: ['./purchaserequest-review-list.component.css']
})
export class PurchaserequestReviewListComponent implements OnInit {

	title: string = 'Review Purchase Requests';
	selectedSortKey: string = 'Id';
	sortDesc: string = 'asc';
	sortKeys: string[] = PurchaseRequest.sortableKeys;
	purchaserequests: PurchaseRequest[];


  constructor(private PurchaseRequestSvc: PurchaserequestService,
  				private SysSvc: SystemService,
  				private LogSvc: LogService) { }

  selectReviewItemsOnly(prs: PurchaseRequest[]): PurchaseRequest[]{
  	let newprs: PurchaseRequest[] = [];
  	for (let pr of prs){
  		if(pr.Status === "REVIEW"){
  			newprs.push(pr);
  		}
  	}
  	return newprs;
  }

  ngOnInit() {
  	this.PurchaseRequestSvc.List()
  		.subscribe(purchaserequests => {
        this.purchaserequests = this.selectReviewItemsOnly(purchaserequests);
        console.log(this.purchaserequests);
      });
  }

}
