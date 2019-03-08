export class exam_schedule_class{
    constructor(
        public exam_id?:number,
        public fk_batch_id?:number,
        public fk_standard_id?:number,
        public fk_subject_id?:number,
        public exam_date?:Date,
        public marks?:number,
        public hours?:number,
        public batch_id?:number,
        public batch_name?:string,
        public subject_name?:string
    ){}
}