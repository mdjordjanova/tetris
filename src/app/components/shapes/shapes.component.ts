import { Component } from '@angular/core';
import { Shape } from '../../shared/models/shape.model';

@Component({
  selector: 'app-shapes',
  styleUrls: ['./shapes.component.scss'],
  templateUrl: 'shapes.component.html'
})
export class ShapesComponent {
  iShape = new Shape<number>([[1, 1, 1, 1]]);
  jShape = new Shape<number>([[1, 0, 0], [1, 1, 1]]);
  lShape = new Shape<number>([[0, 0, 1], [1, 1, 1]]);
  oShape = new Shape<number>([[1, 1], [1, 1]]);
  zShape = new Shape<number>([[1, 1, 0], [0, 1, 1]]);
  sShape = new Shape<number>([[0, 1, 1], [1, 1, 0]]);
  tShape = new Shape<number>([[0, 1, 0], [1, 1, 1]]);
}