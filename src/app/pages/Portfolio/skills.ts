// Se hace importación de las librerías que se necesitan
import { EasyPieChart } from './easyPieChart';
var element: any = document.querySelectorAll(".chart");
element.forEach(function(element: any) {
  new EasyPieChart(element, {
    size: 160,
    barColor: "#FF84E8",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#373737",
    lineCap: "circle",
    animate: ({ duration: 4000, enabled: true })
  });
});


