// Se exporta la clase para poder se utilizada en el script app
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
        const chargScreen: any = this.findInsideMe(".chargingScreen");
        const helloText: any = this.findInsideMe(".helloText");
        const firstSection: any = this.findInsideMe(".first-section");
        helloText.style.opacity = 1;
        // Función que hace un callback (otra función, en este caso vacía) para dentro de sí aplicar opacidad y entre otros estilos a los elementos html en cierto tiempo contado
        setTimeout(function () {
            chargScreen.style.opacity = 0;
            setTimeout(function () {
                chargScreen.style.display = 'none';
            }, 400);
        }, 3000);
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