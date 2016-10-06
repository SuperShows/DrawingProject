var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "grey";
canvas.fillRect(600, 150, 500, 550);
canvas.fillRect(600, 700, 90, 250);
canvas.fillRect(1010, 700, 90, 250);
canvas.fillRect(300, 400, 300, 30);
canvas.fillRect(1100, 400, 300, 30);

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(322,430,22,0,1*Math.PI,false);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(370,430,22,0,1*Math.PI,false);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(420,430,22,0,1*Math.PI,false);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(1378,430,22,0,1*Math.PI,false);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(1330,430,22,0,1*Math.PI,false);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(1280,430,22,0,1*Math.PI,false);
canvas.fill();

canvas.fillStyle = "white";
canvas.fillRect(600, 700, 90, 50);
canvas.fillRect(1010, 700, 90, 50);
canvas.fillRect(600, 670, 500, 50);

canvas.fillStyle = "white";
canvas.fillRect(600, 850, 90, 50);
canvas.fillRect(1010, 850, 90, 50);
canvas.fillRect(600, 650, 500, 30);

canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(670,150,30,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(650,230,20,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(650,560,20,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(670,615,30,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(1030,615,30,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(1050,560,20,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(1050, 200,20,0,2*Math.PI,true);
canvas.fill();


canvas.fillStyle = "black";
canvas.fillRect(700, 450, 300, 10);

canvas.fillStyle = "white";
canvas.fillRect(790, 460, 50, 40);
canvas.fillRect(860, 460, 50, 40);

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(750, 270,70,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(950, 250,70,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(770, 305,30,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(930, 220,30,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(850, 400,30,0,2*Math.PI,true);
canvas.fill();
