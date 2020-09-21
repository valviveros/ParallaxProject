// Se hace importación de las librerías que se necesitan
import { EasyPieChart } from './easyPieChart';
var element: any = document.querySelectorAll(".chart");
const secondImage: any = document.querySelector(".second-section img");
const skillsCont: any = document.querySelector(".skillsContainer");
const sectionSkiT: any = document.querySelector(".section-skills h1");
const sectionDesign: any = document.querySelector(".section-slider h1");
const slider: any = document.querySelector(".slider-contenedor");
const secondTitle: any = document.querySelector(".second-section h1");
const secondText: any = document.querySelector(".second-section p");
const audioTitle: any = document.querySelector(".contenedor-textos h1");
const audioText: any = document.querySelector(".contenedor-textos p");
const app2: any = document.querySelector("#app2");
const progra: any = document.querySelector(".programacion .contenedor-textos");
const prograCont: any = document.querySelector(".programa-contenedor");
var count: number = 0;
// Función que crea los EasyPieChart con sus respesctivas propiedades, primero recorre cada elemento que sea un chart para aplicarle estas propiedades y luego lo anima
export function createCharts() {
  element.forEach(function (element: any) {
    new EasyPieChart(element, {
      size: 160,
      barColor: "#FF84E8",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "#373737",
      lineCap: "circle",
      animate: ({ duration: 6000, enabled: true })
    });
  });
}
// Función que al hacer un scroll dentro de la página se ejecuta, este revisa que este en la altura de la sección que se quiere que carguen los charts
window.onscroll = () => {
  console.log("chart", scrollY);
  if (window.scrollY >= 300) {
    secondTitle.style.transform = "translateY(0px)";
    secondText.style.transform = "translateY(0px)";
    secondImage.style.transform = "translateY(0px)";
  }
  if (window.scrollY >= 825) {
    count += 1;
    sectionSkiT.style.transform = "translateX(0px)";
    if (count == 1) {
      createCharts();
      skillsCont.style.opacity = 1;
    }
  }
  if (window.scrollY >= 1940) {
    sectionDesign.style.transform = "translateY(0px)";
    slider.style.opacity = 1;
    slider.style.transform = "translateY(0px)";
  }
  if (window.scrollY >= 2992) {
    app2.style.transform = "translateX(0px)";
    audioTitle.style.transform = "translateX(0px)";
    audioText.style.transform = "translateY(0px)";
  }
  if (window.scrollY >= 3835) {
    progra.style.transform = "translateX(0px)";
    prograCont.style.transform = "translateX(0px)";
  }
};