import { Flower } from '../models/flower';
import { Point } from '../models/point';
import { FlowerRandomizationService } from '../services/flower-randomization.service';

export class InteractiveFlowers {
  private readonly context: CanvasRenderingContext2D;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private flowers: Flower[] = [];//arrglo de flores
  private readonly randomizationService = new FlowerRandomizationService();
  private ctrlIsPressed = false;
  private mousePosition = new Point(-100, -100);

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.context = this.canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;

    this.addShadowEffect();
    this.addInteractions();
  }

  clearCanvas() {//limpia el canvas
    this.flowers = [];
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  private animateFlowers() {//pone en marcha el crecimiento de las flores
    if (this.flowers.every(f => f.stopChanging)) {
      return;
    }
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.flowers.forEach(flower => {
      flower.increasePetalRadiusWithLimit();//se limita el crecimiento
      flower.draw(this.context);//renderizado de la flor
    });
    window.requestAnimationFrame(() => this.animateFlowers());//ejecución frame per frame
  }

  private addInteractions() {//se añaden la interacciones paqra que se cree la flor
    this.canvas.addEventListener('click', e => {//reconoce un clic en el canvas
      if (this.ctrlIsPressed) {
        this.clearCanvas();
        return;
      }
      this.calculateMouseRelativePositionInCanvas(e);//calcula el lugar en el que ocurrio el evento
      const flower = this.randomizationService.getFlowerAt(this.mousePosition);
      this.flowers.push(flower);
      this.animateFlowers();
    });
    //se valida el si ctrl esta presionado
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.which === 17 || e.keyCode === 17) {
        this.ctrlIsPressed = true;
      }
    });
    window.addEventListener('keyup', () => {
      this.ctrlIsPressed = false;
    });
  }

  private calculateMouseRelativePositionInCanvas(e: MouseEvent) {/* //calcula la posicion del clic dentro del canvas y manda la 
    cooordenadas a Point para que se inicie todo el proceso en torno a dicho punto */
    this.mousePosition = new Point(
      e.clientX +
        (document.documentElement.scrollLeft || document.body.scrollLeft) -
        this.canvas.offsetLeft,
      e.clientY +
        (document.documentElement.scrollTop || document.body.scrollTop) -
        this.canvas.offsetTop
    );
  }

  private addShadowEffect() {//se añaden los efecto de sombra a las flores
    this.context.shadowBlur = 5;
    this.context.shadowOffsetX = 2;
    this.context.shadowOffsetY = 2;
    this.context.shadowColor = '#333';
    this.context.globalAlpha = 0.8;
  }
}
