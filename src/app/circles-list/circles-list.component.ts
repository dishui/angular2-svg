import { Component,  Input, Output, OnChanges, SimpleChange,  EventEmitter, ElementRef } from '@angular/core';
import { Circle } from './circle'; 
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-circles-list',
  templateUrl: 'circles-list.component.html',
  styles: [`
    .draggable {
      cursor: move;
    }
  `]
})
export class CirclesListComponent implements  OnChanges {
  circles: Circle[] = [];
  @Input() radius: number;

  ngOnInit() {
    this.circles = this.getCircles();
  }
  
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.setRadius(cur);
    }
  }

  reset(data) { 
    this.setRadius(data);
    this.circles = [];
    this.circles = this.getCircles(); 
  }

  getCircles() {
    this.getRadius();
    for (let i = 0; i < 20; i++) {
      var cir = new Circle(500, 500);
      cir.r = this.radius;
      this.circles.push(cir);
    }
    return this.circles;
  }

  setRadius(data){
    this.radius = data;
  }

  getRadius(){
    return this.radius;
  }

  getTransform(x, y) {
    return `translate(${x}, ${y}) )`;
  }

}
