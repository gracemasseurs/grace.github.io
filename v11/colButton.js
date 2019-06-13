console.log("shape buttons is called");

class colourButton{
    constructor(x, y,w, h, stroke, fill, canvas){
        this.x = x;
        this.y =y;
        this.w = w;
        this.h = h;
        this.stroke =stroke;
        this.fill = fill;

        this.xMouse = 0;
        this.yMouse = 0;
        this.bound= false;
        this.selected = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log("mouse move"); 
        this.bound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    mClick(e){
        if(this.bound == true){
            
            colourButton.selected = this;
            colourButton.selectedColour =this.fill;
           
        }
    }

    update(){
        this.draw();

    }

    draw(){
        ctx.strokeStyle = this.stroke;
        ctx.fillStyle = this.fill;
        if(colourButton.selected == this){
            ctx.strokeStyle = "rgb(0,0,255)";
            
            //ctx.fillStyle = "rgb(255,255,255)";
            
        }
        else if(this.bound){
            ctx.strokeStyle = "rgb(0,0,255)";
       

        }

        
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        //linewidth of the shape button
        ctx.lineWidth = 6;
        ctx.fill();
        ctx.stroke();
        
    }

    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true;
        }else{
            return false;
        }
        
}


}
colourButton.selected =""; //static variable
colourButton.selectedColour ="rgb(0,0,0)"; //static variable
