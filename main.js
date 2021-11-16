var mouse_event="empty";
var last_position_of_x,last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
mouse_event="mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_position_of_x=e.clientX - canvas.offsetLeft;
current_position_of_y=e.clientY - canvas.offsetTop;

if (mouse_event=="mouseDown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;

console.log("Last Position Of X and Y coordinate = ");
console.log("X = "+last_position_of_x+"Y = "+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log("Current Position Of X and Y coordinate = ");
console.log("X = "+current_position_of_x+"Y = "+current_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
}
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouse_event="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouse_event="mouseLeave";
}