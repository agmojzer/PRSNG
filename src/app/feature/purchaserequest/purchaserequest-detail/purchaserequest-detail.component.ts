import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { Status } from '@model/status';
import { StatusService } from '@svc/status.service';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent implements OnInit {

	title: string = 'Purchase Request Detail';

	id: string;
	resp: any;
	stati: Status[];

	purchaserequest: PurchaseRequest;


	remove(){
		console.log("this.purchaserequest.id", this.purchaserequest.Id);
		this.PurchaserequestSvc.Delete(this.purchaserequest.Id)
			.subscribe(resp => {
				this.resp = resp;
				console.log("Purchaserequest-Detail-Remove:", this.resp);
				this.router.navigate(['/purchaserequest/list']);
			});
	}

	

	review() {
    this.purchaserequest.Status = this.purchaserequest.Total <= 50 
                                    ? this.getStatus("APPROVED")
                                    : this.getStatus("REVIEW");
    this.update();
  }

  update() {
    this.PurchaserequestSvc.Update(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        console.log("PurchaseRequest-Review:", this.resp);
        this.router.navigate(['/purchaserequest/list']);
      });

  }

  getStatus(description: string): Status {
    for(let status of this.stati) {
      if(status.Description === description) {
        return status;
      }
    }
  }

  constructor(private PurchaserequestSvc: PurchaserequestService,
  				private StatusSvc: StatusService,
  				private router: Router,
  				private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	this.PurchaserequestSvc.Get(this.id)
  		.subscribe(purchaserequests => {this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
  		console.log(this.purchaserequest);
  		});
  }

}
