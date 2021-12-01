const canvas=document.querySelector(".board");

const context = canvas.getContext( '2d' );

document.addEventListener("mousedown", startDrawing);
document.addEventListener("mouseup", stopDrawing);
document.addEventListener("mousemove", draw);


let x = 0, y = 0;
let isMouseDown = false;

function getPosition(event){
    x = event.clientX - canvas.offsetLeft;
    y = event.clientY - canvas.offsetTop;
}

function startDrawing(event){
    isMouseDown = true;
    getPosition(event);
}

function stopDrawing(){
    isMouseDown = false;
}

function draw(event){
    if (!isMouseDown) return;
     
    context.lineCap = 'round';
        
    context.moveTo(x, y);
     
    getPosition(event);

    context.lineTo(x , y);
      
    context.stroke();
}