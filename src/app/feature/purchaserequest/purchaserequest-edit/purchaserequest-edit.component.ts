import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaserequestEditComponent implements OnInit {

	title:string = 'Purchaserequest Edit';

	id:string;
	resp:any;

	purchaserequest: PurchaseRequest;

	change(){
		console.log(this.purchaserequest);
		this.PurchaserequestSvc.Update(this.purchaserequest)
			.subscribe(resp => {
				this.resp = resp;
				console.log('Purchaserequest:Change:', this.resp);
				this.router.navigate(['/purchaserequest/list']);
			});
	}

  constructor(private PurchaserequestSvc: PurchaserequestService,
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
