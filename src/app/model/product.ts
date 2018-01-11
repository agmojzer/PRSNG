export class Product {
  Id: number;
  VendorID: number;
  VendorName: string;
  PartNumber: string;
  Name: string;
  Price: number;
  Unit: string;
  PhotoPath: string;

static sortableKeys = ['Name', 'Id', 'VendorName', 'Price'];

  constructor(Id: number = 0, VendorID: number = 0, VendorName: string = '', PartNumber: string = '',
    Name: string = '', Price: number = 0, Unit: string = '', PhotoPath: string = '') 
  	 {
        this.Id = Id;
        this.VendorID = VendorID;
        this.VendorName = VendorName;
        this.PartNumber = PartNumber;
        this.Name = Name;
        this.Price = Price;
        this.Unit = Unit;
        this.PhotoPath = PhotoPath;
     }  
  }

