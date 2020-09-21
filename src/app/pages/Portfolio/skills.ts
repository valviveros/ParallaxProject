import { update } from 'lodash';
// Se hace importación de las librerías que se necesitan
import { EasyPieChart } from './easyPieChart';
var element: any = document.querySelectorAll(".chart");
const skillsCont: any = document.querySelector(".skillsContainer");
var chart: any;

element.forEach(function (element: any) {
  chart = new EasyPieChart(element, {
    size: 160,
    barColor: "#FF84E8",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#373737",
    lineCap: "circle",
    animate: ({ duration: 1000, enabled: true })
  });
});

window.onscroll = () => {
  console.log("entré");
  console.log(window.scrollY);
  element.forEach(function (element: any) {
    if (window.scrollY >= 825) {
      skillsCont.style.opacity = 1;
      element.chart.update(4000);
    }
  });
};