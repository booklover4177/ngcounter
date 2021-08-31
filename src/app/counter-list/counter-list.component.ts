import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  public name:string="Counter Wall";
  counters:Counter[]=[];

  constructor() { }

  create(){

    let newCounter=new Counter();
    this.counters.push(newCounter);

  }

  subtract(){
    this.counters[this.counters.length-1].subtract;
  }

  add(){
    this.counters[this.counters.length-1].add;
  }

  ngOnInit(): void {
  }

}
