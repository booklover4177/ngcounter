export class SuperCounter {
  public value2: number;

  constructor(val1: number, val2: number, val3: number) {
    this.value2 = val1 + val2 + val3;
  }

  public superSubtract() {
    if (this.value2 === 0) {
      return;
    }
    if (this.value2 === 5) {
      this.value2 = this.value2 - 3;
    }
    else {
      this.value2 = this.value2 - 1;
    }


  }
  public superAdd() {
    this.value2 = this.value2 + 3;
  }
}
