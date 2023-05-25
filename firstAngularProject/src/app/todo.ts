export class Todo {
    sn:number;
    title:string;
    desc:string;
    check:boolean
    constructor(sn:number,title:string,desc:string) {
        this.sn=sn;
        this.title=title;
        this.desc=desc;
        this.check=true;
    }
}
