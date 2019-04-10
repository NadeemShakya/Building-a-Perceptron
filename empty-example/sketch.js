let brain;
let points = [];
let indexer = 0;
let epochCount = 0;
let startDrawLoop = false;
let trained = true;

let guessButton = document.querySelector('#guess');
guessButton.addEventListener("click", guess);
// let trainButton = document.querySelector('#train');
// trainButton.addEventListener("click", train);
let addPointsButton = document.querySelector('#addPoints');
addPointsButton.addEventListener("click", addPoints);

function setup() {
  frameRate(5);
    if(trained) {
    createCanvas(windowWidth, windowHeight);
    background(50);
    brain = new Perceptron();
  }
  // showLabel();
 
}

function showLabel() {
    let start = 100;
    let gap = 60
    stroke(255);
    fill(0);
    ellipse(start + gap * 0, 20, 16);
    fill(255);
    ellipse(start + gap * 0, 20, 8);


    stroke(255);
    fill(255);
    ellipse(start + gap * 1, 20, 16);
    ellipse(start + gap * 1, 20, 8);

    stroke(255);
    fill(0);
    ellipse(start + gap * 2, 20, 16);
    fill(0, 255, 0);
    ellipse(start + gap * 2, 20, 8);

    stroke(255);
    fill(0);
    ellipse(start + gap * 3, 20, 16);
    fill(255, 0, 0);
    ellipse(start + gap * 3, 20, 8);

    stroke(255);
    fill(255);
    ellipse(start + gap * 4, 20, 16);
    fill(0, 255, 0);
    ellipse(start + gap * 4, 20, 8);

    stroke(255);
    fill(255);
    ellipse(start + gap * 5, 20, 16);
    fill(255, 0, 0);
    ellipse(start + gap * 5, 20, 8);

    stroke(255);
    fill(255, 255, 0);
    ellipse(start + gap * 6, 20, 30);
    fill(255, 0, 0);
    ellipse(start + gap * 6, 20, 10);

    stroke(255);
    fill(255, 255, 0);
    ellipse(start + gap * 7, 20, 30);
    fill(0, 255, 0);
    ellipse(start + gap * 7, 20, 10);
}
function draw() {
  if(startDrawLoop) {
    for(let p in points){
      brain.guess([points[p].x, points[p].y]);
      let a = brain.activationFuction();
      if(a === points[p].label) {
        fill(0, 255, 0);
      }else {
        fill(255, 0, 0);
      }
      noStroke();
      ellipse(points[p].x, points[p].y, 8);
      brain.train([points[p].x, points[p].y], points[p].label); 
      document.getElementById('weight1').value = brain.weights[0].toFixed(1); 
      document.getElementById('weight2').value = brain.weights[1].toFixed(1); 
    }
    if(brain.checkAccuracy(points.length)) {
      startDrawLoop = false;
    }

  }
}

function addPoints() {
  let totalPoints = document.getElementById('trainingPoints').value;
  if(totalPoints) {
    for(let i = 0; i < totalPoints; i++) {
      points[i] = new Points();
      points[i].createPoints();
      points[i].showPoints();
    }
    startDrawLoop = true;
    document.getElementById('addPointsDiv').style.display = "none";
  }else {
    alert("Enter some training points");
  }
}

function guess() {
    fill(255, 255, 0);
    stroke(255);
    let xValue = document.getElementById('X').value;
    let yValue = document.getElementById('Y').value;
    let label;
    if(xValue >= yValue) {
      label = 1;
    }else if(xValue < yValue) {
      label = -1;
    }
    ellipse(xValue, yValue, 40);
    brain.guess([document.getElementById('X').value, document.getElementById('Y').value]);
    let a = brain.activationFuction();

    if(a == label) {
      fill(0, 255, 0);
    }else {
      fill(255, 0, 0);
    }
    noStroke();
    ellipse(document.getElementById('X').value, document.getElementById('Y').value, 20);


}



