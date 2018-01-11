import { Component, OnInit } from '@angular/core';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';
import { PurchaserequestlineitemService } from '@svc/purchaserequestlineitem.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

	title: string = 'Product List';
	selectedSortKey: string = 'Id'; //must match the property in the product.ts under model
	sortDesc: string = 'asc';
	sortKeys: string[] = Product.sortableKeys;
	products: Product[];
  vendor: Vendor[];

  constructor(private ProductSvc: ProductService,
              private VendorSvc  : VendorService
              ) { }

  ngOnInit() {
  	this.ProductSvc.List()
  		.subscribe(products => {
  			this.products = products;
        this.addVendorName(this.products)
  			console.log(products);
  		})
  }

  addVendorName(prods: Product[]){
    for (let prod of prods){
      this.VendorSvc.Get(prod.VendorID)
        .subscribe(vendors => prod.VendorName = vendors[0].Name)
    }
  }

}
