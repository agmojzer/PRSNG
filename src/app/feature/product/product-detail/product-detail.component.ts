import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	title: string = 'Product Detail';

	id: string;
	resp: any;

	product: Product;
	vendors: Vendor[];

	remove(){
		console.log("this.product.id", this.product.Id);
		this.ProductSvc.Delete(this.product.Id)
			.subscribe(resp => {
				this.resp = resp;
				console.log("Product-Detail-Remove:", this.resp);
				this.router.navigate(['/product/list']);
			});
	}

  constructor(private ProductSvc: ProductService,
  				private router: Router,
  				private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	this.ProductSvc.Get(this.id)
  		.subscribe(products => {this.product = products.length > 0 ? products[0] : null;
  		console.log(this.product);
  		});
  }

}
