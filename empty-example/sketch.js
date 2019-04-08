let brain;
let points = [];
let totalPoints = 10
let indexer = 0;
let epochCount = 0;
let guessButton = document.querySelector('#guess');
guessButton.addEventListener("click", guess);
let trainButton = document.querySelector('#train');
trainButton.addEventListener("click", train);

function setup() {
  frameRate(1);
  createCanvas(600, 600);
  background(0);
  brain = new Perceptron();
  for(let i = 0; i < totalPoints; i++) {
    points[i] = new Points();
    points[i].createPoints();
    points[i].showPoints();
  }
;
}

function draw() {

}

function guess() {
  
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
  
  }
}

function train() {
  epochCount++;
  for(let p in points) {
    brain.train([points[p].x, points[p].y], points[p].label);    
  }
  console.log(`Trained for ${epochCount} epoch.`);
}


