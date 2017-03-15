import { CircleInterface } from './circle.model';
import { Colors, Maths } from '../../shared';

export class Circle implements CircleInterface {
  r: number;
  x: number;
  y: number;
  color: string;

  constructor( 
              private width: number,
              private height: number
             ){
    
    this.x = Maths.randInt(this.width);
    this.y = Maths.randInt(this.height);
    this.color = Colors.COLORS[Maths.randInt(20)];
  }     
}