import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequest } from '@model/purchaserequest';

const url = 'http://localhost:8080/PurchaseRequests/';

@Injectable()
export class PurchaserequestService {

	purchaserequests: PurchaseRequest[];

	List(): Observable<PurchaseRequest[]>{
		return this.http.get(url+"List") as Observable<PurchaseRequest[]>;
	}

	Get(id): Observable<PurchaseRequest[]>{
		return this.http.get(url+"Get?id="+id) as Observable<PurchaseRequest[]>;
	}

	Add(purchaserequest: PurchaseRequest){
		return this.http.post(url+"Add", purchaserequest) as Observable<any>;
	}

	Update(purchaserequest: PurchaseRequest){
		return this.http.post(url+"Update", purchaserequest) as Observable<any>;
	}

	Delete(id): Observable<any>{
		console.log(url+"Delete?id="+id);
		return this.http.get(url+"Delete?id="+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }
}
