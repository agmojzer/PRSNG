import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequestLineItem } from '@model/purchaserequestlineitem';

const url = 'http://localhost:8080/PurchaseRequestLineItems/';

@Injectable()
export class PurchaserequestlineitemService {

	prlis: PurchaseRequestLineItem[];

	Get(id): Observable<PurchaseRequestLineItem[]>{
		return this.http.get(url+"Get?id="+id) as Observable<PurchaseRequestLineItem[]>;
	}

	Add(prli: PurchaseRequestLineItem){
		return this.http.post(url+"Add", prli) as Observable<any>;
	}

	Update(prli: PurchaseRequestLineItem){
		return this.http.post(url+"Update", prli) as Observable<any>;
	}

	Delete(id): Observable<any>{
		console.log(url+"Delete?id="+id);
		return this.http.get(url+"Delete?id="+id) as Observable<any>;
	}

	ListByPR(id): Observable<PurchaseRequestLineItem[]>{
		return this.http.get(url+"LinesForPR?id="+id) as Observable<PurchaseRequestLineItem[]>;
	}

  constructor(private http: HttpClient) { }
}