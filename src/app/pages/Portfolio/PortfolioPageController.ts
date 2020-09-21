// Se importa el sonido para adquirir su url
const soundSrc: string = '../../../assets/audio/coin.mp3';
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
        let count: number = 0;
        const soundEffect: HTMLAudioElement = new Audio(soundSrc);
        helloText.style.opacity = 1;
        menu.style.display = "none";
        firstSection.style.display = "none";
        name.style.transform = "translateX(780px)";
        secondSection.style.display = "none";
        secondTitle.style.transform = "translateY(250px)";
        secondText.style.transform = "translateY(250px)";
        secondImage.style.transform = "translateY(250px)";
        sectionTwo.style.display = "none";
        sectionSkiT.style.transform = "translateX(500px)";
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
                    setTimeout(function () {
                        menu.style.display = "flex";
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
                            secondTitle.style.transform = "translateY(0px)";
                            secondText.style.transform = "translateY(0px)";
                            secondImage.style.transform = "translateY(0px)";
                        }, 300);
                    });
                    break;
                default:
                    break;
            }
        });
        // window.onscroll = () => {
        //     console.log(scrollY);
        //     if (window.scrollY >= 825) {
        //         sectionSkiT.style.transform = "translateX(0px)";
        //     }
        // };
        $(".image").mouseenter(function () {
            $(".image").css({
                transform: "scale(1.1)"
            });
        }).mouseleave(function () {
            $(".image").css({
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

        // Método el cual le entra un selector y un all, de modo que concatena el id app junto al de la página y finalmente el del selector que queremos encontrar, luego comprueba si el booleano all es verdadero para devolver el elemento requerido sino devuelve todo el elemento


        if (navigator.serviceWorker.controller) {
            console.log('Active service worker found, no need to register');
        } else {
            navigator.serviceWorker
                .register('sw.js', {
                    scope: './'
                })
                .then(function (reg) {
                    console.log(`SW has been registered for scope (${reg.scope})`);
                });
        }

        const canvas = <HTMLCanvasElement>document.getElementById('c');
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        const flowers = new InteractiveFlowers(canvas);

        const btn = document.getElementById('clearBtn');
        btn.addEventListener('click', () => {
            flowers.clearCanvas();
        });
        // const box: any = this.findInsideMe(".box");
        // const TDBox: any = this.findInsideMe(".TDBox");
        // const clouds: any = this.findInsideMe(".cloud", true);
        // window.onscroll = (_:any) => {
        //     console.log(`X: ${window.scrollX} Y: ${window.scrollY}`)
        //     const p = (window.scrollY / window.innerHeight) * 100;
        //     box.style.left = `${p}%`;
        //     box.style.opacity = `${p / 100}`;

        //     clouds[0].style.left = `${p * 2}%`;
        //     clouds[1].style.left = `${p * 1.3}%`;

        //     if (window.scrollY >= 340) {
        //         TDBox.style.opacity = 1;
        //         if (window.scrollY >= 350) {
        //             TDBox.style.transform = `rotateY(${window.scrollY}deg)`;
        //         }
        //     } else {
        //         TDBox.style.opacity = 0;
        //     }
        // }
    }



    findInsideMe(selector: string, all = false) {
        const query = `#app #${this.component.id} ${selector}`;
        if (!all) {
            return document.querySelector(query);
        } else {
            return document.querySelectorAll(query);
        }
    }
    // Método el cual hace llamado/importación de la hoja de estilos de la página y luego de la vista que ene ste caso es el html de la página 
    loadView() {
        require(`./${this.component.style}`);
        this.view = require(`./${this.component.view}`);
    }
    // Método que retorna un arreglo del id del contenedor secundario, y el fragmento de la página del html
    getView(): [string, DocumentFragment] {
        return [this.component.id, document.createRange().createContextualFragment(this.view)];
    }
}