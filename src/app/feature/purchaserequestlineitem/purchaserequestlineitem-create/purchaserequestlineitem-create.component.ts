import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PurchaseRequest } from '@model/purchaserequest';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { PurchaserequestlineitemService } from '@svc/purchaserequestlineitem.service';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { SystemService } from '@svc/system.service';


@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaserequestlineitemCreateComponent implements OnInit {

	title: string = 'Create new line item';
	prid: number;
	resp: any;

	lineitem: PurchaseRequestLineItem = new PurchaseRequestLineItem('', 0);
	purchaseRequest: PurchaseRequest;
	products: Product[];

	compareFn(p1: Product, p2: Product) {
		p1 == p2;}

		create(){
		this.lineitem.PurchaseRequestID = this.prid;
		console.log(this.lineitem);
		this.prliSvc.Add(this.lineitem)
			.subscribe(resp => {
				this.resp = resp;
				console.log('lineitem:Create:', this.resp);
				this.router.navigate(['/purchaserequest/lines/'+this.prid]);
			});
	}	



  constructor(private prliSvc: PurchaserequestlineitemService,
  						private PurchaseRequestSvc: PurchaserequestService, 
  						private ProductSvc: ProductService,
  						private SysSvc: SystemService,
  						private route: ActivatedRoute,
  						private router: Router) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => {
  		this.prid = parms["prid"]});
  		
  	this.ProductSvc.List()
  		.subscribe(products => this.products = products);
  }

}
