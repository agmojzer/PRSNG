import { PurchaseRequest } from '@model/purchaserequest';


export class PurchaseRequestLineItem {
	Id: number;
	PurchaseRequestID: number;
	PurchaseRequest: PurchaseRequest;
	ProductID: number;
	ProductName: string;
	Quantity: number;
	ProductPrice: number;
	VendorName: string;
	VendorID: number;

	static sortableKeys = ['Id', 'PurchaseRequestID', 'Quantity', 'ProductName', 
		'ProductPrice', 'VendorName'];

	constructor(ProductName: string, Quantity: number) 	
	{
        this.Quantity = Quantity;
        this.ProductName = ProductName;   
	}
}