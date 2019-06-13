console.log("control object js called")

class ControlObject{
    constructor(canvas){

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        //these control the width and the height of the dragged rectangle
        //these will be used for width and height of any created object
        this.w = 0;
        this.h = 0;
        

        this.element = canvas;
        this.element.addEventListener ('mousedown', this.mDown.bind(this));
        this.element.addEventListener ('mousemove', this.mMove.bind(this));
        this.element.addEventListener ('mouseup', this.mUp.bind(this));

        this.objectSet = [];

    }

    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
    }

    mUp(e){
        this.mouseDown = false;

        var ROne = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colArray[2][6]);
        this.objectSet.push(ROne); 
        console.log(this.objectSet); 

    }

    update(){
        //the variables will be called again in the main which will define the position of the background boundary

        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        if(this.mouseDown){
            console.log("mouse is down");
            this.draw();
        }

      


        for(var i = 0; i < this.objectSet.length; i ++){
            this.objectSet[i].update();
        }
  
    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
    


    }

    //this function draws the rectangle that is dragged
    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(200,230,20)"; //determins the colour of the stroke of the dragging rectangle
        ctx.stroke();
    } 
    
    //this function draws the background rectangle
    drawBoundaryRect(x,y,w,h,col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.fillStyle = col; //determins the colour of the fill of the dragging rectangle
        ctx.fill();
    }
}
