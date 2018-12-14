var ScorePlayer = 0;
var ScoreCom = 0;
var paper;
var rock;
var scissorhand;
var radius= 100;
var radiuss= 100;
var radiusss= 100;


function preload(){
	paper = loadImage('pic/Download (3).png');
	rock = loadImage('pic/Download (1)i.png');
	scissorhand =loadImage('pic/Download (1).png');
}


function textii(){
	//Titel
	textSize(70);
	fill(255);
	text('Rock-Paper-Scissor', windowWidth / 2 - 255,100);
	//Score
	textSize(45);
	fill(200);
	text(ScorePlayer, windowWidth/2-100, 200);
	text(':',windowWidth/2+10,200);
	text(ScoreCom, windowWidth/2+100, 200);
	//Ergeniss
	textSize(90);
	fill(255);
	text(ergebniss, windowWidth/2-150,700);
	
	
}
function chreislli(){
	//paper
	fill(255);
	noStroke();
	ellipse(windowWidth/2+32, 300+150/2,radius*2,radius*2);
	fill(10)
	//rock	
	fill(255);
	noStroke();
	ellipse(windowWidth/2-300+150/2, 300+150/2,radiuss*2,radiuss*2);
	//scissor

	fill(255);
	noStroke();
	ellipse(windowWidth/2+195+150/2, 300+150/2,radiusss*2,radiusss*2);
	
}
