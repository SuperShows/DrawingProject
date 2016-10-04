var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "yellow";
canvas.fillRect(600, 100, 500, 600);
canvas.fillRect(600, 700, 90, 250);
canvas.fillRect(1010, 700, 90, 250);

canvas.fillStyle = "brown";
canvas.fillRect(600, 700, 90, 50);
canvas.fillRect(1010, 700, 90, 50);
canvas.fillRect(600, 670, 500, 50);

canvas.fillStyle = "white";
canvas.fillRect(600, 850, 90, 50);
canvas.fillRect(1010, 850, 90, 50);
canvas.fillRect(600, 650, 500, 50);

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(650,200,30,0,2*Math.PI,true);
canvas.fill();
