import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { SuperCounter } from '../super-counter';
import { SuperDuperCounter } from '../super-duper-counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  public name: string = "Counter Wall";
  counters: Counter[] = [];
  superCounters: SuperCounter[] = [];
  superDuperCounters: SuperDuperCounter[]=[];

  constructor() { }

  create() {

    if (this.counters.length < 3) {
      let newCounter = new Counter();
      this.counters.push(newCounter);
    } else if((this.counters.length=== 3) && (this.superCounters.length===2)){
      this.createSuperCounter();
      this.createSuperDuperCounter();

    }else{

      this.createSuperCounter();

    }


  }

  createSuperCounter(){
    let counterVal1 = this.counters[0].value;
    let counterVal2 = this.counters[1].value;
    let counterVal3 = this.counters[2].value;

    let newSuperCounter = new SuperCounter(counterVal1, counterVal2, counterVal3);
    this.superCounters.push(newSuperCounter);
    this.counters.pop();
    this.counters.pop();
    this.counters.pop();
  }

  createSuperDuperCounter(){
    let counterVal1 = this.superCounters[0].value2;
    let counterVal2 = this.superCounters[1].value2;
    let counterVal3 = this.superCounters[2].value2;

    let newSuperDuperCounter = new SuperDuperCounter(counterVal1, counterVal2, counterVal3);
    this.superDuperCounters.push(newSuperDuperCounter);
    this.superCounters.pop();
    this.superCounters.pop();
    this.superCounters.pop();
  }

  subtract() {
    if (this.counters.length != 0) {
      this.counters[this.counters.length - 1].subtract();
    }
    if (this.superCounters.length != 0 && this.counters.length===0) {
      this.superCounters[this.superCounters.length - 1].superSubtract();
    }

  }

  add() {
    if (this.counters.length != 0) {
      this.counters[this.counters.length - 1].add();
    }
    if (this.superCounters.length != 0 && this.counters.length===0) {
      this.superCounters[this.superCounters.length - 1].superAdd();
    }

  }


  ngOnInit(): void {
  }

}
