import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '@model/product';

const url = 'http://localhost:8080/Products/';

@Injectable()
export class ProductService {

	products: Product[];

	List(): Observable<Product[]>{
		return this.http.get(url+"List") as Observable<Product[]>;
	}

	Get(id): Observable<Product[]>{
		return this.http.get(url+"Get?id="+id) as Observable<Product[]>;
	}

	Add(product: Product){
		return this.http.post(url+"Add", product) as Observable<any>;
	}

	Update(product: Product){
		return this.http.post(url+"Update", product) as Observable<any>;
	}

	Delete(id): Observable<any>{
		console.log(url+"Delete?id="+id);
		return this.http.get(url+"Delete?id="+id) as Observable<any>;
	}

  constructor(private http: HttpClient) { }
  	}
  	

