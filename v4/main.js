console.log("main is called");
objectSet= [];

//this controls the boundary rectangle 
var myT = new ControlObject(canvas,50,300,700,250);
var myE = new Ellipse(200, 100, 40, 60, colArray[2][3]);

console.log("hello")

function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();
    myE.update();

    



    window.requestAnimationFrame(animate);

}
animate();