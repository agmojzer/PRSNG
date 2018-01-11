import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { Product } from '@model/product';
import { ProductService } from '@svc/product.service';
import { PurchaseRequest } from '@model/purchaserequest';
import { PurchaserequestlineitemService } from '@svc/purchaserequestlineitem.service';


@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})
export class PurchaserequestlineitemEditComponent implements OnInit {

	title: string = 'Edit Line Item'

	id: string;
	prid: string;
	resp: any;

	prli: PurchaseRequestLineItem;
	products: Product[];
	pr: PurchaseRequest;

	compareFn(pid1: number, pid2: number): boolean {
		return pid1 === pid2;
	}

	change(){
		this.prli.PurchaseRequest = new PurchaseRequest(+this.prid);
		console.log("PRLI into Svc:", this.prli);
		this.prliSvc.Update(this.prli)
			.subscribe(resp => {
				this.resp = resp;
				console.log('PRLI:Change:', this.resp);
				this.router.navigate(['/purchaserequest/lines/'+this.prid]);
			});
	}

  constructor(private ProductSvc: ProductService,
  				private prliSvc: PurchaserequestlineitemService,
  				private router: Router,
  				private route: ActivatedRoute
  				) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => {this.id = parms['id'];
  		this.prid = parms['prid'];
  		console.log(":id", this.id, ":prid", this.prid);
  		});
  	this.prliSvc.Get(this.id)
  		.subscribe(purchaserequestlineitems => {
  			this.prli = purchaserequestlineitems.length > 0 ? purchaserequestlineitems[0] : null;
  			console.log(this.prli);
  		});	
  	this.ProductSvc.List()
  		.subscribe(products => {
  			this.products = products; 
  			console.log("Products:", this.products);
  		});
  }

}
