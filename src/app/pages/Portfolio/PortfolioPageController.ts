// Se importa el sonido para adquirir su url
// const soundSrc: any = require('../../../assets/audio/coin.mp3');
import './jquery.min.js';
// Se exporta la clase para poder se utilizada en el script app
import { InteractiveFlowers } from './animations/interactive-flowers'
export class PortfolioPageController {
    // Propiedad view
    view: any;
    // Propiedad component que contiene el id, view, style de nuestra página junto a start que hace llamado de nuestro método start()
    component = {
        id: 'portfolio-page',
        view: 'Portfolio.html',
        style: 'Portfolio.scss',
        start: () => { this.start(); }
    }
    // Contructor que hace llamado a loadView()
    constructor() {
        this.loadView();
    }
    // Método que se carga junto a la página para poder aplicar animaciones, opacidades, transformaciones
    start() {
        // Se hace creación de variables que llamarán el método findInsideMe() para seleccionar el elemento requerido
        const menu: any = this.findInsideMe(".menu");
        const chargScreen: any = this.findInsideMe(".chargingScreen");
        const helloText: any = this.findInsideMe(".helloText");
        const firstSection: any = this.findInsideMe(".first-section");
        const name: any = this.findInsideMe(".first-section h1");
        const secondSection: any = this.findInsideMe(".second-section");
        const secondTitle: any = this.findInsideMe(".second-section h1");
        const secondText: any = this.findInsideMe(".second-section p");
        const secondImage: any = this.findInsideMe(".second-section img");
        const sectionTwo: any = this.findInsideMe(".section-2");
        const sectionSkills: any = this.findInsideMe(".section-skills");
        const sectionSkiT: any = this.findInsideMe(".section-skills h1");
        const skillsCont: any = this.findInsideMe(".skillsContainer");
        const sectionSlider: any = this.findInsideMe(".section-slider");
        const sectionWorks: any = this.findInsideMe(".section-trabajos");
        const sectionDesign: any = this.findInsideMe(".section-slider h1");
        const canvasFlower: any = this.findInsideMe("canvas");
        const slider: any = this.findInsideMe(".slider-contenedor");
        const audioTitle: any = this.findInsideMe(".contenedor-textos h1");
        const audioText: any = this.findInsideMe(".contenedor-textos p");
        const app2: any = this.findInsideMe("#app2");
        const progra: any = this.findInsideMe(".programacion .contenedor-textos");
        const prograCont: any = this.findInsideMe(".programa-contenedor");
        let count: number = 0;
        const helloAudio: any = this.findInsideMe(".helloAudio");
        const soundEffect: HTMLAudioElement = new Audio(helloAudio.dataset.src);
        helloText.style.opacity = 1;
        canvasFlower.style.display = "none";
        menu.style.display = "none";
        firstSection.style.display = "none";
        name.style.transform = "translateX(780px)";
        secondSection.style.display = "none";
        secondTitle.style.transform = "translateY(250px)";
        secondText.style.transform = "translateY(250px)";
        secondImage.style.transform = "translateY(250px)";
        sectionTwo.style.display = "none";
        sectionSkiT.style.transform = "translateX(500px)";
        sectionDesign.style.transform = "translateY(500px)";
        slider.style.transform = "translateY(500px)";
        audioTitle.style.transform = "translateX(500px)";
        audioText.style.transform = "translateY(250px)";
        app2.style.transform = "translateX(-1100px)";
        progra.style.transform = "translateX(1100px)";
        prograCont.style.transform = "translateX(-1100px)";
        slider.style.opacity = 0;
        sectionSlider.style.display = "none";
        sectionWorks.style.display = "none";
        // Función que hace un callback (otra función, en este caso vacía) para dentro de sí aplicar opacidad y entre otros estilos a los elementos html en cierto tiempo contado
        helloText.addEventListener('click', () => {
            count += 1;
            switch (count) {
                case 1:
                    soundEffect.play();
                    chargScreen.style.background = "#FFA9E7";
                    helloText.style.backgroundImage = "-webkit-linear-gradient(#414361 50%, #D0F4EA 50%)";
                    break;
                case 2:
                    soundEffect.load();
                    soundEffect.play();
                    chargScreen.style.background = "#D0F4EA";
                    helloText.style.backgroundImage = "-webkit-linear-gradient(#FF84E8 50%, #414361 50%)";
                    break;
                case 3:
                    soundEffect.load();
                    soundEffect.play();
                    chargScreen.style.opacity = 0;
                    // Método que ejecuta una función en cierto tiempo para cambiar las propiedades de los elementos, este metodo se hace aplica varias veces (2 anidados)
                    setTimeout(function () {
                        menu.style.display = "flex";
                        canvasFlower.style.display = "block";
                        chargScreen.style.display = "none";
                        firstSection.style.display = "flex";
                        secondSection.style.display = "flex";
                        sectionTwo.style.display = "block";
                        sectionSlider.style.display = "flex";
                        sectionWorks.style.display = "block";
                        setTimeout(function () {
                            menu.style.opacity = 1;
                            firstSection.style.opacity = 1;
                            secondSection.style.opacity = 1;
                        }, 100);
                        setTimeout(function () {
                            name.style.transform = "translateX(0px)";
                        }, 300);
                    });
                    break;
                default:
                    break;
            }
        });
        // Con JQuery se hace una selección del elemento y ejecuta una función para cambiarle el estilo a la misma una vez que entra el mouse o sale
        $(".image").mouseenter(function () {
            $(".image").css({
                transform: "scale(1.1)"
            });
        }).mouseleave(function () {
            $(".image").css({
                transform: "scale(1)"
            });
        });
        // Con JQuery se hace una selección del elemento y ejecuta una función para cambiarle el estilo a la misma una vez que entra el mouse o sale
        $(".nameT").mouseenter(function () {
            $(".nameT").css({
                transform: "scale(1.1)"
            });
        }).mouseleave(function () {
            $(".nameT").css({
                transform: "scale(1)"
            });
        });
        // Se hace selección del document con un JQuery para saber si este está cargado , de modo que ejecutará una función vacía la cuala hará selección del elemento con clase cursor
        $(document).ready(function () {
            var cursor = $(".cursor");
            // Se selecciona la ventana y detecta si el mouse se mueve, el cual tendrá una función que recibe un evento, luego le modificará la posición del cursor
            $(window).mousemove(function (e) {
                cursor.css({
                    top: e.clientY - cursor.height() / 2,
                    left: e.clientX - cursor.width() / 2
                });
            });
            // Selecciona la ventana y detecta si el mouse se ha ido o ha entrado para cambiar la opacidad del cursor
            $(window)
                .mouseleave(function () {
                    cursor.css({
                        opacity: "0"
                    });
                })
                .mouseenter(function () {
                    cursor.css({
                        opacity: "1"
                    });
                });
            // Hace selección de la clase hoverable para ver si el mouse entra o sale para modificar la opacidad y transformación del cursor
            $(".hoverable")
                .mouseenter(function () {
                    cursor.css({
                        transform: "scale(3.2)",
                        opacity: "0.5"
                    });
                })
                .mouseleave(function () {
                    cursor.css({
                        transform: "scale(1)",
                        opacity: "1"
                    });
                });
            // Hace selección de la ventana para ver si el mouse se clickea o no para modificar la opacidad y transformación del cursor 
            $(window)
                .mousedown(function () {
                    cursor.css({
                        transform: "scale(.2)"
                    });
                })
                .mouseup(function () {
                    cursor.css({
                        transform: "scale(1)"
                    });
                });
        });

        const canvas = <HTMLCanvasElement>document.getElementById('c');
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        const flowers = new InteractiveFlowers(canvas);
    }

    // Método el cual le entra un selector y un all, de modo que concatena el id app junto al de la página y finalmente el del selector que queremos encontrar, luego comprueba si el booleano all es verdadero para devolver el elemento requerido sino devuelve todo el elemento
    findInsideMe(selector: string, all = false) {
        const query = `#app #${this.component.id} ${selector}`;
        if (!all) {
            return document.querySelector(query);
        } else {
            return document.querySelectorAll(query);
        }
    }
    // Método el cual hace llamado/importación de la hoja de estilos de la página y luego de la vista que en este caso es el html de la página 
    loadView() {
        require(`./${this.component.style}`);
        this.view = require(`./${this.component.view}`);
    }
    // Método que retorna un arreglo del id del contenedor secundario, y el fragmento de la página del html
    getView(): [string, DocumentFragment] {
        // El método createRange crea un un rango  y el createContextualFragment recibe un string y retorna un DocumentFragment el cual es el HTML 
        return [this.component.id, document.createRange().createContextualFragment(this.view)];
    }
}