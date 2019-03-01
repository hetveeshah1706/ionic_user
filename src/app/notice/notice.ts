export class notice{
    constructor(
      public notice_id?:string,
     public notice_date?:Date,
     public notice_name?:string,
    public notice_desc?:string,
       public fk_stanfard_id?:number,
       public fk_batch_id?:number,
      public standard_no?:number,
      public batch_name?:string
    
      ){
    
      }
    }
    
  
  