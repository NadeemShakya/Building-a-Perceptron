class Perceptron {
    constructor() {
        this.weights = [0.5, 0.3];
        this.guessedValue = 0;
        this.output;
        this.learningRate = 0.1;
        this.correct = 0;
    }

    guess(inputs) {
        this.guessedValue = 0;
        for(let p in inputs) {
            this.guessedValue +=  this.weights[p] * inputs[p];
        }
    }

    activationFuction() {
        if(this.guessedValue >= 0) {
            this.output = 1;
        }else if(this.guessedValue < 0) {
            this.output = -1;
        }
        return this.output;
    }

    train(inputs, label) {
        let error = label - this.output;
      
        for(let w in this.weights) {
            this.weights[w] = this.weights[w] + error * inputs[w] * this.learningRate;
        }
    }
 
    checkGuessValue(label) {
      //  console.log("Expected Output: " + label + " , Guessed Output: " + this.output);
    }

    accuracy(correct, totalPoints) {
        console.log((correct / totalPoints) * 100);
    }
}