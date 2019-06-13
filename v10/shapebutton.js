console.log("shape buttons is called");

class ShapeButton{
    constructor(text, x, y,w, h, stroke, fill, textC,over,canvas){
        this.x = x;
        this.y =y;
        this.w = w;
        this.h = h;
        this.stroke =stroke;
        this.fill = fill;
        this.textC= textC;
        this.text = text;
        this.over =  over;

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
            
            ShapeButton.selected = this;
            ShapeButton.selectedShape =this.text;
           
        }
    }

    update(){
        this.draw();
        this.writeText();

    }

    draw(){
        if(ShapeButton.selected == this){
            ctx.fillStyle = this.over;
            
            //ctx.fillStyle = "rgb(255,255,255)";
            
        }
        else if(this.bound){

            ctx.fillStyle = this.over;
       
            //ctx.fillStyle = "rgb(255,0,0)";

        }
        else{
            ctx.fillStyle = this.fill;
        }
        
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.strokeStyle = this.stroke;
        //linewidth of the shape button
        ctx.lineWidth = 6;
        ctx.fill();
        ctx.stroke();
        
    }
    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "20px sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }
    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true;
        }else{
            return false;
        }
    }
}
ShapeButton.selected =""; //universal
ShapeButton.selectedShape =""; //universal

class width_Button{
    constructor(text, x, y, w, h, width, stroke, fill, textC, over, canvas){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.width = width;
        this.stroke = stroke;
        this.fill = fill;
        this.textC = textC;
        this.text = text;
        this.over = over;

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        this.bound = false;
        this.click = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        if(this.bound == true){
            
            width_Button.selected = this;
            width_Button.selectedWidth = this.width;

        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        console.log("mouse move"); 
        this.bound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        this.draw();
        this.writeText();
        }

    draw(){
        if(ShapeButton.selected == this ){
            ctx.fillStyle = colArray[3][4];
            
        }
        else if( this.bound ){
            ctx.fillStyle = this.over;
           
        }else{
            ctx.fillStyle = this.fill
        }
        
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();

    }

    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "20px sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }
    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true;
        }else{
            return false;
        }
        
}


}
width_Button.selected = ""; //universal
width_Button.selectedWidth = ""; //universal
