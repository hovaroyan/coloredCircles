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
  arrayColors: any = {};
  circleDiameter!: number;
  selectedColor: string='color';
  colorToggle: boolean = false;


  handleAdd(count:number) {
    this.items.length = count;
    this.colorToggle = true;

    if(count === 100){
      this.circleDiameter = 50;
      this.arrayColors ={}
    } else if(count === 225){
      this.circleDiameter = 32;
      this.arrayColors ={}
    } else {
      this.circleDiameter = 23;
      this.arrayColors ={}
    }
    console.log(this.selectedColor);
    
  }
  
  handleReset() {
    this.items.length = 0;
    this.colorToggle = !this.colorToggle;
  }

}
