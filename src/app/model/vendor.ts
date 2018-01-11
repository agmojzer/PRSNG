export class Vendor {
  Id: number;
  Code: string;
  Name: string;
  Address: string;
  City: string;
  State: string;
  Zip: string;
  Phone: string;
  Email: string;
  PreApproved: boolean;

static sortableKeys = ['Name', 'Id', 'Code', 'City', 'PreApproved'];

  constructor(Id: number = 0, Code: string = '', Name: string = '', Address: string = '', 
  	City: string = '', State: string = '', Zip: string = '', Phone: string = '', Email: string = '',
    PreApproved: boolean = false) 
  	 {
        this.Id = Id;
        this.Code = Code;
        this.Name = Name;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Zip = Zip;
        this.Phone = Phone;
        this.Email = Email;
        this.PreApproved = PreApproved;
  }

}