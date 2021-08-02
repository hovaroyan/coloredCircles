import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coloredCircles';
  items: Array<string> =[];
  circleDiameter!: number;


  handleAdd(count:number) {
    this.items.length = count;

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
  }

}
