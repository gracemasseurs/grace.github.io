console.log("rectangle js called");

class Rectangle{
    constructor(x, y, w, h, c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c1;
    }
    update(){
        this.draw();

    }
    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}

class Circle{
    constructor(xS, yS, xM, yM, c1){
        this.xC = (xS + xM)/2; // centre x
        this.yC = (yS + yM)/2; // centre y
        this.radiusX = Math.abs( (xM - xS)/2 ); //Math.abs is to make the values always positive
        this.radiusY = Math.abs( (yM - yS)/2 );
        this.r = 0;
        if(this.radiusX <this.radiusY){
            this.r = this.radiusX;
        }
            else{
                this.r = this.radiusY
            };
        
        this.fill = c1;
    }

    update(){
        
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}

class Line{
    constructor(xS, yS, xM, yM, c1){
        //These are the variables required for a line
        this.xS = xS;
        this.yS = yS;
        this.xM = xM;
        this.yM = yM;
        this.fill = c1;
    }

    update(){
        //this will draw the line
        this.draw()
    }

    draw(){
        //line function
        ctx.strokeStyle = this.fill;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.xS, this.yS);
        ctx.lineTo(this.xM, this.yM);
        ctx.stroke();
    }
}

class Ellipse{

    constructor(xS, yS, xM, yM, c1){ 
        //finding the midpoint for the xMouseStart and the xMouse and the same for y
        this.xC = (xS + xM)/2; // centre x
        this.yC = (yS + yM)/2; // centre y

        //calculating the x radius and the y radius
        //Maths.abs ensures the values are positive
        this.radiusX = Math.abs( (xM - xS)/2 ); //Math.abs is to make the values always positive
        this.radiusY = Math.abs( (yM - yS)/2 );

        this.rotation = 0;
        this.startAngle = 0;
        this.endAngle = 2*Math.PI;

        this.fill = c1;
    }


    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.ellipse(this.xC, this.yC, this.radiusX, this.radiusY, this.rotation, 
                this.startAngle, this.endAngle);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}