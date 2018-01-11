	export class User {
  Id: number;
	UserName: string;
	Password: string;
	FirstName: string;
	LastName: string;
	Phone: string;
	Email: string;
	Reviewer: boolean;
	Admin: boolean;
	Active: boolean;

static sortableKeys = ['Id', 'FirstName', 'LastName', 'UserName', 'Reviewer', 'Admin', 'Active', 'Email'];

  constructor(Id: number = 0, UserName: string = '', Password: string = '', FirstName: string = '', 
  	LastName: string = '', Phone: string = '', Email: string = '', Admin: boolean = false, 
    Reviewer: boolean = false, Active: boolean = true) 
  	 {
        this.Id = Id;
        this.UserName = UserName;
        this.Password = Password;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Phone = Phone;
        this.Email = Email;
        this.Admin = Admin;
        this.Reviewer = Reviewer;
        this.Active = Active;
  }

}