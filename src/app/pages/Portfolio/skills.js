import './jquery.min.js';
import './jquery.easy-pie-chart';
$(function epa() {
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

