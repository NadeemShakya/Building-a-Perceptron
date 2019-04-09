class Points {
    constructor(){
        this.x;
        this.y;
        this.label;
    }

    createPoints() {
        
        this.x = floor(random(0, width));
        this.y = floor(random(0, height));
        let classification;
        if(this.x >= this.y) {
            classification = +1;
        }else if(this.x < this.y) {
            classification = -1;
        }
        this.label = classification;
        
    }

    showPoints() {
        stroke(255);
        line(0, 0, height, height);
        if(this.label === 1) {
            fill(255)
        }else if(this.label === -1) {
            fill(0);
        }
        ellipse(this.x, this.y, 16);
        
    }

}