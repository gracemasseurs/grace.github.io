console.log ("main js called")

var myT = new ControlObject(canvas);

function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();

    window.requestAnimationFrame(animate);

}

animate();