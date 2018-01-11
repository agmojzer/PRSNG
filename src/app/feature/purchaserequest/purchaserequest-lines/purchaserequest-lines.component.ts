import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { PurchaseRequestLineItem} from '@model/purchaserequestlineitem';
import { PurchaserequestlineitemService } from '@svc/purchaserequestlineitem.service';
import { StatusService } from '@svc/status.service';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';


@Component({
  selector: 'app-purchaserequest-lines',
  templateUrl: './purchaserequest-lines.component.html',
  styleUrls: ['./purchaserequest-lines.component.css']
})
export class PurchaserequestLinesComponent implements OnInit {

	title: string = 'Purchase Request Summary';
	id: string;
	resp;

	purchaserequest: PurchaseRequest;
	lines: PurchaseRequestLineItem[];

	remove(){
		this.PurchaseRequestSvc.Delete(this.purchaserequest)
			.subscribe(resp => {
				this.resp=resp;
				console.log("PurchaseRequest-Detail-Remove:", this.resp);
				this.router.navigate(['/purchaserequest/list']);
			});
	}

	// selectPRLIs(prlis: PurchaseRequestLineItem[]){
	// 	let tempArray: PurchaseRequestLineItem[] = [];
	// 	for (let prli of prlis){
	// 		if (prli.PurchaseRequestID)
	// 	}
	// }

  constructor(private PurchaseRequestSvc: PurchaserequestService,
  				private router: Router,
  				private route: ActivatedRoute,
  				private StatusSvc: StatusService,
  				private prliSvc: PurchaserequestlineitemService,
  				private prdSvc: ProductService) {}

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	this.PurchaseRequestSvc.Get(this.id)
  	.subscribe(purchaserequests => {
  		this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
  		 this.addStatus(this.purchaserequest);
  		 this.addLineItems(this.purchaserequest);
  		console.log(this.purchaserequest);


  	})
 
  }

  addStatus(pr: PurchaseRequest){
      this.StatusSvc.Get(pr.StatusID)
        .subscribe(stati => pr.Status = stati[0].Description)
    
  }

  addLineItems(pr: PurchaseRequest){
      this.prliSvc.ListByPR(pr.Id)
        .subscribe(lis => {
        	this.lines = lis;
	  		this.addProduct(this.lines);
        });
    
  }

  addProduct(lines: PurchaseRequestLineItem[]) {
   console.log('Getting Products for', lines.length, "line items");
   for(let line of lines) {
     this.prdSvc.Get(line.ProductID)
      .subscribe(products => {
      	  let product = products.length > 0 ? products[0] : null;
          line.ProductName = product.Name;
          line.ProductPrice = product.Price;
          console.log('found product for line...');
          console.log(line.ProductName, line.ProductPrice);
        });
   }
   console.log('Done assigning products to lines');
 }

}
