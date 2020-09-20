let svg = document.querySelector('svg.status')//busca la clase status
let curPoint = 1;//posicion que va a tomar el  svg al iniciar

let slideshow = (point) => {
    //cuando la posicion es 5 se reinicia y regresa a 1
    point++;
    if (point > 5) {
        point = 1;
    }
    console.log("segundo point "+point)
    newStatus(point);//entra point de la funcion newStatus
}


let newStatus = (toPoint) => {
    document.querySelector('img.active').classList.remove('active');//busca la imagen de la clase que se llama active y la remueve de la lista
    document.querySelector('img[data-img="' + toPoint + '"]').classList.add('active');//dependiento el valor que tenga la imagen le agrega la clase active
    console.log("primer point "+toPoint)
    if (toPoint > curPoint) {
        
        svg.style.setProperty('--point-to-go', toPoint);//posicion actual-nueva posicion de la estela de la animacion
        svg.classList.add('activeNext');
        document.querySelector('svg .point').addEventListener('animationend', () => {
            svg.style.setProperty('--cur-point', toPoint);//aquí es el compotamiento del punto al hacer la transicion
            svg.classList.remove('activeNext');
            curPoint = toPoint;
        });
    }

    //me crea la animacion para que regrese al inicio solo se activa en 5
    if (toPoint < curPoint) {
        console.log(toPoint)
        svg.style.setProperty('--point-to-go', toPoint);
        svg.classList.add('activePrev');
        document.querySelector('svg .point').addEventListener('animationend', () => {
            svg.style.setProperty('--cur-point', toPoint);
            svg.classList.remove('activePrev');
            curPoint = toPoint;
        });
    }
};

let timer = setInterval(slideshow(curPoint), 2000);//tiempo que toma en avanzar el svg




var ptns = Array.from(document.querySelectorAll('.ptn'));
//me crea un evento que detecte el click en los puntos
ptns.forEach(function (ptn) {
    ptn.addEventListener("click", function (e) {
        clearInterval(timer); //ejecuta la funcion una vez cada cierto tiempo
        newStatus(e.target.dataset.no);//mueve el svg a una nueva posicion
        // console.log(e.target.dataset.no)
        console.log("asfasf")

    });
});

