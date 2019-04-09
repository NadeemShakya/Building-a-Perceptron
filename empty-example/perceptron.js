class Perceptron {
    constructor() {
        this.weights = [-0.05, 0.03];
        this.guessedValue = 0;
        this.output;
        this.learningRate = 0.2;
        this.correct = 0;
        this.accuracyIndex = 0;
        this.accuracy;
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
        if(error === 0) {
            this.accuracyIndex++;
        }
        for(let w in this.weights) {
            this.weights[w] = this.weights[w] + error * inputs[w] * this.learningRate;
        }

    }

    checkAccuracy(totalPoints) {
        this.accuracy = ((this.accuracyIndex / totalPoints) * 100);
        this.accuracyIndex = 0;
        if(this.accuracy === 100) {
            return true;
        }else {
            return false;
        }
    }
}