// Se hace importación de las librerías que se necesitan
import { EasyPieChart } from './easyPieChart';
var element: any = document.querySelectorAll(".chart");
const skillsCont: any = document.querySelector(".skillsContainer");
const sectionSkiT: any = document.querySelector(".section-skills h1");
var count: number = 0;
// Función que crea los EasyPieChart con sus respesctivas propiedades, primero recorre cada elemento que sea un chart para aplicarle estas propiedades y luego lo anima
function createCharts() {
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
  console.log("chart",scrollY);
  if (window.scrollY >= 825) {
    count += 1;
    sectionSkiT.style.transform = "translateX(0px)";
    if (count == 1) {
      createCharts();
      skillsCont.style.opacity = 1;
    }
  }
};