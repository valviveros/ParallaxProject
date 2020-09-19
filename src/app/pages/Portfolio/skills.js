// Se hace importación de las librerías que se necesitan
import './jquery.min.js';
import './jquery.easy-pie-chart';
// Se hace selección dentro de la función del elemento la cual usa el easyPieChart para modificar sus propiedades y ejecutar la animación de recorrido del chart
$(function () {
    $('.chart').easyPieChart({
      size: 160,
      barColor: "#FF84E8",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "#373737",
      lineCap: "circle",
      animate: 2000,
    });
});

