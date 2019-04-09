let brain;
let points = [];
let indexer = 0;
let epochCount = 0;
let startDrawLoop = false;

let guessButton = document.querySelector('#guess');
guessButton.addEventListener("click", guess);
let trainButton = document.querySelector('#train');
trainButton.addEventListener("click", train);

let addPointsButton = document.querySelector('#addPoints');
addPointsButton.addEventListener("click", addPoints);

function setup() {
  frameRate(3);
  createCanvas(windowWidth, windowHeight);
  background(0);
  brain = new Perceptron();


;
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
    fill(200, 100, 100);
    ellipse(document.getElementById('X').value, document.getElementById('Y').value, 30);
    brain.guess([document.getElementById('X').value, document.getElementById('Y').value]);
    let a = brain.activationFuction();
    console.log(a);
    if(a == 1) {
      fill(0, 255, 0);
    }else {
      fill(255, 0, 0);
    }
    noStroke();
    ellipse(document.getElementById('X').value, document.getElementById('Y').value, 8);


}

function train() {
  epochCount++;
  for(let p in points) {
  }
 

  console.log(`Trained for ${epochCount} epoch.`);
}


