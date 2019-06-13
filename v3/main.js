console.log("main is called");
objectSet= [];

//this controls the boundary rectangle 
var myT = new ControlObject(canvas,50,300,700,250);

console.log("hello")

function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();

    



    window.requestAnimationFrame(animate);

}
animate();