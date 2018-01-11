export class Status {
  Id: number;
  Description: string;
  
//static sortableKeys = [];

  constructor(Id: number = 0, Description: string = '') 
  	 {
        this.Id = Id;
        this.Description = Description;    
  }

}