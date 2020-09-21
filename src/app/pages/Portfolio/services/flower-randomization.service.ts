import { Flower } from '../models/flower';
import { Point } from '../models/point';
import { FlowerCenter } from '../models/flower-center';
import { Petal } from '../models/petal';

export class FlowerRandomizationService {
  private readonly colors = [//se establecen los colores
    '#f10e57',
    '#ea767a',
    '#ff6d3d',
    '#ecac43',
    '#fb9983',
    '#f9bc9f',
    '#f8ed38',
    '#a8e3f9',
    '#d1f2fd',
    '#ecd5f5',
    '#fee4fd',
    '#8520b4',
    '#fa2e59',
    '#ff703f',
    '#ff703f',
    '#f7bc05',
    '#ecf6bb',
    '#76bcad'
  ];

  constructor() {}

  //recibe los puntos de control de la flor para setearlos en la Flor y retornar una con caracteristicas aleatorias
  getFlowerAt(point: Point): Flower {
    const flowerCenter = new FlowerCenter(
      point,
      this.randomIntFromInterval(5, 16),//radio del centro del petalo
      this.randomColor()//color del centro
    );
    const numberOfPetals = this.randomIntFromInterval(4, 8);
    const petalAngleSpacing = this.randomIntFromInterval(5, 25);
    const petalAngleSpan = 360 / numberOfPetals - petalAngleSpacing;
    const petal = new Petal(
      point,
      this.randomIntFromInterval(20, 50),//radio del petalo
      this.randomIntFromInterval(9, 14) / 10,//proporcion
      petalAngleSpan,//inclinacion
      this.randomColor()//color del petalo
    );
    return new Flower(flowerCenter, numberOfPetals, petal); //finalmente se retorna la flor
  }

  getFlowerOnCanvas(canvasWidth: number, canvasHeight: number): Flower {
    return this.getFlowerAt(
      new Point(
        this.randomIntLessThan(canvasWidth),
        this.randomIntLessThan(canvasHeight)
      )
    );
  }

  private randomIntFromInterval(min: number, max: number): number { //recibe un intervalo y retorna un entero aleatorio
    // min: inclusive; max: exclusive
    return Math.floor(Math.random() * (max - min) + min);
  }

  private randomIntLessThan(n: number): number {//ayuda a ubicar Point dentro del canvas
    return this.randomIntFromInterval(0, n);
  }

  private randomColor(): string {//retorna uno de los colores listados
    return this.colors[this.randomIntLessThan(this.colors.length)];
  }
}
