console.log("main is called");
objectSet= [];

var objectOne = new ControlObject (12,73, 515, 520, canvas);
objectSet.push(objectOne);

// drawing the button
//class button (constructor) text, x, y,w, h, stroke, fill, textC,over,canvas
var butOne = new ShapeButton("Rectangle", 14, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butTwo = new ShapeButton("Ellipse", 144, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butThree = new ShapeButton("Circle", 274, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butFour = new ShapeButton("Line", 404, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butFive = new ShapeButton("Brush", 534, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butSix = new ShapeButton("Square", 664, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);

//these are the two buttons for when you make a mistake on the canvas or would like to restart
var reset = new ShapeButton("Reset", 534, 75, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var undo = new ShapeButton("Undo", 664, 75, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);

//Width buttons to change the width of the line 
var w1 = new width_Button("XS", 533, 482, 39, 40, 2, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var w2 = new width_Button("S", 581, 482, 50, 40, 5, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var w3 = new width_Button("M", 639.5, 482, 40, 40, 8, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var w4 = new width_Button("L", 688, 482, 50, 40, 10, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var w5 = new width_Button("XL", 746, 482, 39, 40, 14, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);

//the colours are in order in rows going from a lighter colour to a darker and brighter of the same colour as it progresses downwards
for( var i = 0 ; i<9 ; i++){
    var temp= new colourButton (534 +(i%3)*86,126+Math.floor(i/3)*50,78,40, colArray[0][i], colArray[0][i], canvas);
    objectSet.push(temp);
}

for( var i = 0 ; i<9 ; i++){
    var temp1= new colourButton (534 +(i%3)*86,278+Math.floor(i/3)*50,78,40, colArray[1][i], colArray[1][i], canvas);
    objectSet.push(temp1);
}

//colour purple
var colSeven = new colourButton (534,431,78,40, colArray[1][9], colArray[1][9], canvas);
var colFourteen = new colourButton (620,431,78,40, colArray[1][10], colArray[1][10], canvas);
var colTwentyone = new colourButton (706,431,78,40, colArray[1][11], colArray[1][11], canvas);

//pushing the buttons so they appear on the drawing canvas
objectSet.push(butOne, butTwo, butThree, butFour, butFive, butSix, reset, undo, w1, w2, w3, w4, w5, colSeven, colFourteen, colTwentyone);
function animate(){
    ctx.clearRect(0,0,width,height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);

}
animate();