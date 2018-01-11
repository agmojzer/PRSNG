export class PurchaseRequest {
	Id: number;
	UserID: number;
	UserName: string;
	Description: string;
	Justification: string;
	DateNeeded: Date;
	DeliveryMode: string;
	StatusID: number;
	Status: string;
	Total: number;
	SubmittedDate: Date;

	static sortableKeys = ['Id', 'UserID', 'UserName', 'DateNeeded', 'Status', 'Total', 
		'SubmittedDate'];

	constructor(Id: number = 0, UserID: number = 0, UserName:string = '', 
		Description: string = '', Justification: string = '', DateNeeded: Date = null, 
		DeliveryMode: string = '', StatusID: number = 1, Status: string = '', 
		Total: number = 0, SubmittedDate: Date = null) 	
	{
        this.Id = Id;
        this.UserID = UserID;
      	this.UserName = UserName;
        this.Description = Description;
        this.Justification = Justification;
        this.DateNeeded = DateNeeded;
        this.DeliveryMode = DeliveryMode;
        this.StatusID = StatusID;
        this.Status = Status;
        this.Total = Total;
        this.SubmittedDate = SubmittedDate;
       
	}
}