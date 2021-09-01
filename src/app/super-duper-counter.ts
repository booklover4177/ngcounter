export class SuperDuperCounter {
  public value3:number;
  public date:Date;

  constructor(val1:number, val2:number, val3:number){
    this.value3=val1+val2+val3;
  }

  public superDuperAddPerSec(){
    setInterval(()=>this.superDuperAdd(), 1000);

  }

  public superDuperAdd(){
    this.value3++;
  }
}
