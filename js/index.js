$(document).ready(function () {
  $("#ventas").html("$250,563");
  $("#devoluciones").html("$25,456");
  $("#gastos").html("$65,456");
  $("#ingresos").html("$245,562");

  $("#piezasVentas, #piezasVentaDia").text("265");
  $("#piezasVentaMes").text("6,230");
  $("#piezasVentaAnio").text("5,612");

  $("#totalVentasDia").text("$249,356");
});

var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var color = Chart.helpers.color;
var barChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
      borderColor: window.chartColors.red,
      borderWidth: 1,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
    {
      label: "Dataset 2",
      backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
      borderColor: window.chartColors.blue,
      borderWidth: 1,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
  ],
};

var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
};

var config_pie = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          window.chartColors.red,
          window.chartColors.orange,
          window.chartColors.yellow,
          window.chartColors.green,
          window.chartColors.blue,
        ],
        label: "Dataset 1",
      },
    ],
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  },
  options: {
    responsive: true,
  },
};

var timeFormat = "MM/DD/YYYY HH:mm";

function newDate(days) {
  return moment().add(days, "d").toDate();
}

function newDateString(days) {
  return moment().add(days, "d").format(timeFormat);
}

var color = Chart.helpers.color;
var config_line = {
  type: "line",
  data: {
    labels: [
      // Date Objects
      newDate(0),
      newDate(1),
      newDate(2),
      newDate(3),
      newDate(4),
      newDate(5),
      newDate(6),
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        fill: false,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
      {
        label: "My Second dataset",
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        fill: false,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
      {
        label: "Dataset with point data",
        backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
        borderColor: window.chartColors.green,
        fill: false,
        data: [
          {
            x: newDateString(0),
            y: randomScalingFactor(),
          },
          {
            x: newDateString(5),
            y: randomScalingFactor(),
          },
          {
            x: newDateString(7),
            y: randomScalingFactor(),
          },
          {
            x: newDateString(15),
            y: randomScalingFactor(),
          },
        ],
      },
    ],
  },
  options: {
    title: {
      text: "Chart.js Time Scale",
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            parser: timeFormat,
            // round: 'day'
            tooltipFormat: "ll HH:mm",
          },
          scaleLabel: {
            display: true,
            labelString: "Date",
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "value",
          },
        },
      ],
    },
  },
};

window.onload = function () {
  var ctx = document.getElementById("canva-uno").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  });

  var ctx = document.getElementById("canva-dos").getContext("2d");
  window.myPie = new Chart(ctx, config_pie);

  var ctx = document.getElementById("canva-tres").getContext("2d");
  window.myLine = new Chart(ctx, config_line);
};
