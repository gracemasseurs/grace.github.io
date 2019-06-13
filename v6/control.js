console.log("control object js called")

class ControlObject{
    constructor(x,y,w,h){

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.dragging = false;

        //these control the width and the height of the dragged rectangle
        //these will be used for width and height of any created object
        this.x = 170;
        this.y = 20;
        this.w = 0;
        this.h = 0;
        // these are fixed dimensions for the background rectangle and are set using parameters
        this.rW = 605;
        this.rH = 400;

        this.dx = 0;
        this.dy = 0;
        //this.stroke= colArray[0][1];

        //boundary and dragging permissions
        this.insideBoundary = false;



        this.element = canvas;
        this.element.addEventListener ('mousedown', this.mDown.bind(this));
        this.element.addEventListener ('mousemove', this.mMove.bind(this));
        this.element.addEventListener ('mouseup', this.mUp.bind(this));

        this.objectSet = [];

    }

    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        if(this.insideBoundary == true){
            this.dragging = true;
        }
 
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.insideBoundary = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.rW, this.rH);
        console.log(this.insideBoundary);
        if (this.dragging){
            
            if (this.xMouse < this.x){
                console.log(this.xMouse);
                this.xMouse = this.x;
            }
            if(this.xMouse > this.x + this.rW){
                this.xMouse = this.x + this.rW
            }
            if (this.yMouse < this.y){
                this.yMouse = this.y;
            }
            if(this.yMouse > this.y + this.rH){
                this.yMouse = this.y + this.rH
            }
        } 



    }

    mUp(e){
        if(this.dragging){

            if (ShapeButton.selectedShape == "Rectangle"){
                var ROne = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colourButton.selectedColour);
                this.objectSet.push(ROne);    
            }else if(ShapeButton.selectedShape == "Ellipse"){    
                var EOne = new Ellipse (this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, colourButton.selectedColour);
            this.objectSet.push(EOne); 
            }

        }

        this.dragging = false;
    }

    update(){
        ctx.beginPath();
        this.drawBoundaryRect(this.x, this.y, this.rW, this.rH, "rgb(189,189,189)");


        //the variables will be called again in the main which will define the position of the background boundary
        // this is where the width and the hieght of the dragged rectangle is updated
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        if(this.dragging){
            console.log("mouse is down");
            //this draws the bounding box when you drag
            this.draw();
        }

      


        for(var i = 0; i < this.objectSet.length; i ++){
            this.objectSet[i].update();
        }
            

            if(this.dragging == true && this.insideBoundary == true){
                 // this draws the rectangle (guide)
                 console.log("draw");
                this.draw();
                }
  
    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
    

    }

    //this function draws the rectangle that is dragged
    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "rgb(255,255,255)"; //determins the colour of the stroke of the dragging rectangle
        ctx.stroke();

    } 
    
    //this function draws the background rectangle
    drawBoundaryRect(x,y,w,h,col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.fillStyle = col; //determins the colour of the fill of the boundary rectangle
        ctx.fill();
    }
// returns true or false if mouse is inside rectangular boundary
// paramters x and y mouse position and x, y, width, height of the boundary
    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true;
        }else{
            return false;
        }
}

}