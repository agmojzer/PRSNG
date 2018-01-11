import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

	title:string = 'Vendor Edit';

	id:string;
	resp:any;

	vendor: Vendor;

	change(){
		console.log(this.vendor);
		this.VendorSvc.Update(this.vendor)
			.subscribe(resp => {
				this.resp = resp;
				console.log('Vendor:Change:', this.resp);
				this.router.navigate(['/vendor/list']);
			});
	}

  constructor(private VendorSvc: VendorService,
  				private router: Router,
  				private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	this.VendorSvc.Get(this.id)
  		.subscribe(vendors => {this.vendor = vendors.length > 0 ? vendors[0] : null;
  			console.log(this.vendor);
  		});
  }

}