export class Point {
/* se declaran las entradas del constructor como public readonly
para que puedan ser llamadas dede fuera de la clase pero no
modificadas*/
  constructor(public readonly x = 0, public readonly y = 0) {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
  }
}
