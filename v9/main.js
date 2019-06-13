console.log("main is called");
objectSet= [];

//this controls the boundary rectangle 
//var myT = new ControlObject(canvas,50,300,700,250);
//var myE = new Ellipse(200, 100, 40, 60, colArray[2][3]);

var objectOne = new ControlObject (canvas);
objectSet.push(objectOne);

// drawing the button
//class button (constructor) text, x, y,w, h, stroke, fill, textC,over,canvas
var butOne = new ShapeButton("Rectangle", 14, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butTwo = new ShapeButton("Ellipse", 144, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butThree = new ShapeButton("Circle", 274, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butFour = new ShapeButton("Line", 404, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var butFive = new ShapeButton("Brush", 534, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);

var reset = new ShapeButton("Reset", 534, 75, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
var undo = new ShapeButton("Undo", 664, 75, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);

/* var w1 = new width_Button("S", 600, 24, 120, 40, colArray[0][1], colArray[0][1], colArray[2][2], colArray[2][0], canvas);
objectSet.push(w1); */

//row one
//the colours are in order in rows going from a lighter colour to a darker and brighter of the same colour as it progresses downwards
var colOne = new colourButton (534,126,78,40, colArray[0][0], colArray[0][0], canvas);
var colTwo = new colourButton (534,176,78,40, colArray[0][3], colArray[0][3], canvas);
var colThree = new colourButton (534,227,78,40, colArray[0][6], colArray[0][6], canvas);
var colFour = new colourButton (534,278,78,40, colArray[1][0], colArray[1][0], canvas);
var colFive = new colourButton (534,329,78,40, colArray[1][3], colArray[1][3], canvas);
var colSix = new colourButton (534,380,78,40, colArray[1][6], colArray[1][6], canvas);
var colSeven = new colourButton (534,431,78,40, colArray[1][9], colArray[1][9], canvas);

//row two
var colEight = new colourButton (620,126,78,40, colArray[0][1], colArray[0][1], canvas);
var colNine = new colourButton (620,176,78,40, colArray[0][4], colArray[0][4], canvas);
var colTen = new colourButton (620,227,78,40, colArray[0][7], colArray[0][7], canvas);
var colEleven = new colourButton (620,278,78,40, colArray[1][1], colArray[1][1], canvas);
var colTwelve = new colourButton (620,329,78,40, colArray[1][4], colArray[1][4], canvas);
var colThirteen = new colourButton (620,380,78,40, colArray[1][7], colArray[1][7], canvas);
var colFourteen = new colourButton (620,431,78,40, colArray[1][10], colArray[1][10], canvas);

//row three
var colFifteen = new colourButton (706,126,78,40, colArray[0][2], colArray[0][2], canvas);
var colSixteen = new colourButton (706,176,78,40, colArray[0][5], colArray[0][5], canvas);
var colSeventeen = new colourButton (706,227,78,40, colArray[0][8], colArray[0][8], canvas);
var colEighteen = new colourButton (706,278,78,40, colArray[1][2], colArray[1][2], canvas);
var colNineteen = new colourButton (706,329,78,40, colArray[1][5], colArray[1][5], canvas);
var colTwenty = new colourButton (706,380,78,40, colArray[1][8], colArray[1][8], canvas);
var colTwentyone = new colourButton (706,431,78,40, colArray[1][11], colArray[1][11], canvas);

objectSet.push(butOne, butTwo, butThree, butFour, butFive, reset, undo, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven,colEight, colNine, colTen, colEleven, colTwelve, colThirteen, colFourteen, colFifteen, colSixteen, colSeventeen, colEighteen, colNineteen, colTwenty, colTwentyone);

function animate(){
    ctx.clearRect(0,0,width,height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);

}
animate();