import { Point } from './point';
/* Dibuja el centro de la flor */
export class FlowerCenter {
  constructor(
    private readonly centerPoint: Point,
    private readonly centerRadius: number,
    private readonly centerColor: string
  ) {}
  //recibe el contexto del canvas
  draw(context: CanvasRenderingContext2D) {
    context.save(); //guarda la informacion del canvas antes de modificar
    context.beginPath();
    context.arc(
      this.centerPoint.x,
      this.centerPoint.y,
      this.centerRadius,
      0,
      2 * Math.PI
    );
    context.fillStyle = this.centerColor;
    context.fill();//colorea
    context.restore();//devuelve la información a como estaba sin quitar el objeto agregado
  }
}
