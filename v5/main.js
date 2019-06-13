console.log("main is called");
objectSet= [];

//this controls the boundary rectangle 
//var myT = new ControlObject(canvas,50,300,700,250);
//var myE = new Ellipse(200, 100, 40, 60, colArray[2][3]);

var objectOne = new ControlObject (canvas);
objectSet.push(objectOne);

// drawing the button
//class button (constructor) text, x, y,w, h, stroke, fill, textC,over,canvas
var butOne = new ShapeButton("Rectangle", 25, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butTwo = new ShapeButton("Ellipse", 25, 80, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
objectSet.push(butOne, butTwo);

function animate(){
    ctx.clearRect(0,0,width,height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);

}
animate();