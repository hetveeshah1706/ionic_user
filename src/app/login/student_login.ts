export class student_login{
    constructor(
      public student_id:string,
     public student_password:string,
     public student_image?:string,
     public student_name?:string,
       public date_of_birth?:Date,
       public joining_date?:Date ,
       public fk_batch_id?:number,
       public fk_standard_id?:number,
      public fk_subject_id?:string,
      public batch_name?:string,
      public standard_no?:number,
      public subject_name?:string

    
      ){
    
      }
    }
    
  
  