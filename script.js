
/* (c) 2017 Kazuki KOHZUKI */

const LENGTH = 101;

var x = new Array(LENGTH);
var v1s = new Array(LENGTH);
var v2s = new Array(LENGTH);
var btn = null;
var running = false;

window.onload = function() {
  btn = document.getElementById("run");
  for (var i = 0; i < LENGTH; i++) {
    x[i] = i / 10;
  }
  updateV1();
  updateV2();
  updateTime();
  makeGraph();

  document.getElementById("v1").addEventListener("click", function() {
    updateV1();
    updateGraph();
  });

  document.getElementById("v2").addEventListener("click", function() {
    updateV2();
    updateGraph();
  });

  document.getElementById("time").addEventListener("click", function() {
    updateTime();
    updateGraph();
  });

  document.getElementById("run").addEventListener("click", run);
}

function updateV1()
{
  document.getElementById("value1").innerHTML = document.getElementById("v1").value;
}

function updateV2()
{
  document.getElementById("value2").innerHTML = document.getElementById("v2").value;
}

function updateTime()
{
  document.getElementById("time-value").innerHTML = document.getElementById("time").value;
}

function run()
{
  //var btn = document.getElementById("run");
  btn.innerHTML = running ? "Run" : "Stop";
  running = !running;

  document.getElementById("time").value = 0;
  loopSleep(100, 100, function(i) {
    document.getElementById("time").value = i + 1;
    updateTime();
    updateGraph();
    return running;
  });
}

/*
 * https://qiita.com/akyao/items/a718cc78436df68d7e15
 */
function loopSleep(_loopLimit,_interval, _mainFunc){
  var loopLimit = _loopLimit;
  var interval = _interval;
  var mainFunc = _mainFunc;
  var i = 0;
  var loopFunc = function () {
    var result = mainFunc(i);
    if (result === false) {
      // break機能
      return;
    }
    i = i + 1;
    if (i < loopLimit) {
      setTimeout(loopFunc, interval);
    }
  }
  loopFunc();
}

function makeGraph()
{
  calc();

  var config = {
    type: "line",
    data: {
      labels: x,
      datasets: [{
        label: "v1",
        backgroundColor: "#1025B1",
        borderColor: "#1025B1",
        data: v1s,
        fill: false,
      }, {
        label: "v2",
        backgroundColor: "#F50760",
        borderColor: "#F50760",
        data: v2s,
        fill: false
      }]
    },
    options: {
      responsive: true,
      title:{
        display:true,
        text: "Simulation of Chromatography"
      },
      elements: {
        point: { radius: 0 }
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Position'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Conc.'
          }
        }]
      }
    }
  };

  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
}

function calc()
{
  var v1 = document.getElementById("v1").value;
  var v2 = document.getElementById("v2").value;
  var t = document.getElementById("time").value;

  for (var i = 0; i < LENGTH; i++) {
    v1s[i] = Math.exp(-Math.pow((x[i]-v1*t), 2));
    v2s[i] = Math.exp(-Math.pow((x[i]-v2*t), 2));
  }
}

function updateGraph()
{
  calc();
  window.myLine.update();
}
