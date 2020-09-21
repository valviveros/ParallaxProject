import { update } from 'lodash';
// Se hace importación de las librerías que se necesitan
import { EasyPieChart } from './easyPieChart';
var element: any = document.querySelectorAll(".chart");
const skillsCont: any = document.querySelector(".skillsContainer");
var count: number = 0;

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

window.onscroll = () => {
  if (window.scrollY >= 825) {
    count += 1;
    if (count == 1) {
      createCharts();
      skillsCont.style.opacity = 1;
    }
  }
};