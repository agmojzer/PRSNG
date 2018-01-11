import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Vendor } from '@model/vendor';

const url = 'http://localhost:8080/Vendors/';

@Injectable()
export class VendorService {

	vendors: Vendor[];

	List(): Observable<Vendor[]>{
		return this.http.get(url+"List") as Observable<Vendor[]>;
	}

	Get(id): Observable<Vendor[]>{
		return this.http.get(url+"Get?id="+id) as Observable<Vendor[]>;
	}

	Add(vendor: Vendor){
		return this.http.post(url+"Add", vendor) as Observable<any>;
	}

	Update(vendor: Vendor){
		return this.http.post(url+"Update", vendor) as Observable<any>;
	}

	Delete(id): Observable<any>{
		console.log(url+"Delete?id="+id);
		return this.http.get(url+"Delete?id="+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }
}
