let brain;
let points = [];
let totalPoints = 100;
function setup() {
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

function mousePressed() {
  let correct = 0;
  for(p in points) {
    brain.guess([points[p].x, points[p].y]);
    let a = brain.activationFuction();
    brain.train([points[p].x, points[p].y], points[p].label);
    if(a === points[p].label) {
      fill(0, 255, 0);
      correct++;
    }else {
      fill(255, 0, 0);
    }
    noStroke();
    ellipse(points[p].x, points[p].y, 8);
    brain.checkGuessValue(points[p].label);
  }
    brain.accuracy(correct, totalPoints);
  
}