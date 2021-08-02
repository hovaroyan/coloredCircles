import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: Array<string> =[];
  circleDiameter!: number;
  select: boolean =false;
  selectcolor: string='color';


  handleAdd(count:number) {
    this.items.length = count;
    this.select = true;

    if(count === 100){
      this.circleDiameter = 50;
    } else if(count === 225){
      this.circleDiameter = 32;
    } else {
      this.circleDiameter = 23;
    }
  }
  
  handleReset() {
    this.items.length = 0;
    this.select = !this.select;
  }

}
