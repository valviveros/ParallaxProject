export class PortfolioPageController {
    view: any;
    component = {
        id: 'portfolio-page',
        view: 'Portfolio.html',
        style: 'Portfolio.scss',
        start: () => { this.start(); }
    }

    constructor() {
        this.loadView();
    }

    start() {
        const chargScreen: any = this.findInsideMe(".chargingScreen");
        const helloText: any = this.findInsideMe(".helloText");
        const firstSection: any = this.findInsideMe(".first-section");
        helloText.style.opacity = 1;
        setTimeout(function () {
            chargScreen.style.opacity = 0;
            setTimeout(function () {
                chargScreen.style.display = 'none';
            }, 400);
        }, 3000);
        $(document).ready(function(){
            var cursor = $(".cursor");
            
                $(window).mousemove(function(e) {
                    cursor.css({
                        top: e.clientY - cursor.height() / 2,
                        left: e.clientX - cursor.width() / 2
                    });
                });
            
                $(window)
                    .mouseleave(function() {
                        cursor.css({
                            opacity: "0"
                        });
                    })
                    .mouseenter(function() {
                        cursor.css({
                            opacity: "1"
                        });
                    });
            
                $(".hoverable")
                    .mouseenter(function() {
                        cursor.css({
                            transform: "scale(3.2)",
                            opacity: "0.5"
                        });
                    })
                    .mouseleave(function() {
                        cursor.css({
                            transform: "scale(1)",
                            opacity: "1"
                        });
                    });
            
                $(window)
                    .mousedown(function() {
                        cursor.css({
                            transform: "scale(.2)"
                        });
                    })
                    .mouseup(function() {
                        cursor.css({
                            transform: "scale(1)"
                        });
                    });
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

    loadView() {
        require(`./${this.component.style}`);
        this.view = require(`./${this.component.view}`);
    }

    getView(): [string, DocumentFragment] {
        return [this.component.id, document.createRange().createContextualFragment(this.view)];
    }
}