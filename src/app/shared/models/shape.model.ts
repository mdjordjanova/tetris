export interface IShape<T> {
  matrix: IMatrix<T>;
}

export class Shape<T> implements IShape<T> {
  matrix: ShapeMatrix<T>;

  constructor(values: T[][]) {
    this.matrix = new ShapeMatrix<T>(values);
  }
}

export interface IMatrix<T> {
  rows: number;
  cols: number;
  values: T[][];
}

export class ShapeMatrix<T> implements IMatrix<T> {
  rows: number;
  cols: number;
  values: T[][];

  constructor(values: T[][]) {
    this.rows = values.length;
    this.cols = this.rows > 0 ? values[0].length : 0;

    this.values = values.map(function (arr) {
      return arr.slice();
    });
  }
}