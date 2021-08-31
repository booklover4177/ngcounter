export class Counter {

  public value:number;

  constructor(){
    this.value=0;
  }

  public subtract(){
    if(this.value===0){
      return;
    }else{
      this.value--;
    }


  }

  public add(){
    this.value++;
  }
}
