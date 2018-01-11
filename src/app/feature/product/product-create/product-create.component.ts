import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	title: string = 'Product Create';

	resp: any;

	product: Product = new Product (0, 0, '','', '', 0, '', '');

	vendors: Vendor[];

	create(){
		console.log(this.product);
		this.ProductSvc.Add(this.product)
			.subscribe(resp => {
				this.resp = resp;
				console.log('Product:Create:', this.resp);
				this.router.navigate(['/product/list']);
			});
	}

   compareFn(v1: number, v2: number): boolean{
  	return v1 == v2;
  }

  constructor(private VendorSvc: VendorService,
  			  private ProductSvc: ProductService,
  		      private router: Router) { }

  ngOnInit() {
  	this.VendorSvc.List()
  		.subscribe(vendors => this.vendors = vendors);
  }

}
