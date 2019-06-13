class Ellipse{

    constructor(xS, yS, xM, yM, c1){ 
        //finding the midpoint for the xMouseStart and the xMouse and the same for y
        this.xC = (xS + xM)/2; // centre x
        this.yC = (yS + yM)/2; // centre y

        //calculating the x radius and the y radius
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