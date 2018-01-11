import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { PurchaserequestlineitemService } from '@svc/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';
import { PurchaseRequest } from '@model/purchaserequest';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-purchaserequestlineitem-detail',
  templateUrl: './purchaserequestlineitem-detail.component.html',
  styleUrls: ['./purchaserequestlineitem-detail.component.css']
})
export class PurchaserequestlineitemDetailComponent implements OnInit {

	title: string = 'Line Item Detail';

	id: string;
	prid: string;
  prli: PurchaseRequestLineItem;
  	resp: any;



	remove() {
		 //insert the prid
		//this.prli.PurchaseRequest = new PurchaseRequest(+this.prid);
    //this.PurchaseRequestLineitemSvc.Delete(this.prli)
    this.PurchaseRequestLineitemSvc.Delete(this.prli.Id)
      .subscribe(resp => {
        this.resp = resp;
       console.log("PurchaseRequestLineitem-Detail-Remove:", this.resp);
        this.router.navigateByUrl('/purchaserequest/lines/'+this.prid);
      });

	}

  constructor(private PurchaseRequestLineitemSvc: PurchaserequestlineitemService,
  						private router: Router,
  						private route: ActivatedRoute,
              private prdSvc: ProductService,
              private vendorSvc: VendorService) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => {
  		this.id = parms['id'];
  		this.prid = parms['prid'];
  	});
  	this.PurchaseRequestLineitemSvc.Get(this.id)
  		.subscribe(purchaserequestlineitems => {
        this.prli = purchaserequestlineitems.length > 0 ? purchaserequestlineitems[0] : null;
        this.addProduct(this.prli);
        console.log(this.prli);
      });
  }

  addProduct(prlis: PurchaseRequestLineItem){
      this.prdSvc.Get(this.prli.ProductID)
        .subscribe(products => {
         this.prli.ProductName = products[0].Name;
         this.prli.ProductPrice = products[0].Price;
         this.vendorSvc.Get(products[0].VendorID)
           .subscribe(vendors => {
           console.log('adding vendor name to product...');
           this.prli.VendorName = vendors[0].Name;
           console.log(this.prli.VendorName);
         });
        })  
  }

}
