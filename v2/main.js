console.log ("main js called")

var myT = new ControlObject(canvas,50,300,700,250);

function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();

    window.requestAnimationFrame(animate);

}

animate();