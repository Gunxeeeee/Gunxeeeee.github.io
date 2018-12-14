function setup() {
};

function draw() {
	createCanvas(windowWidth, windowHeight);
	background(55);
	textii();
	chreislli();
	//Bilder
	image(paper,windowWidth/2-30,300,150,150);
	image(rock,windowWidth/2-290,310,130,130);
	image(scissorhand,windowWidth/2+190,300,150,150);	
	klicke();
};

//Klicke
var ComInput;
var playerInput;
var rockValue = 2;
var paperValue =1;
var scissorValue =3;
var clicked;
var ScorePlayer = 0;
var ScoreCom = 0;
function mousePressed(){
	clicked = true;
}
	
function klicke() {
	function ComputerInput(){
		ComInput = floor(random(1,4));
		console.log(ComInput);
	};
	//paper 
	if (mouseX > windowWidth/2-75 && mouseX < windowWidth/2+142&& mouseY > 275 && mouseY < 475){
		radius = 110;
		if(clicked == true){
			playerInput = paperValue;
			ComputerInput();
			console.log(playerInput);		
			Caalculate();			
		}
	}else{
		radius = 100;
	}
	//rock
	if (mouseX > windowWidth/2-350 && mouseX < windowWidth/2-125 && mouseY > 275 && mouseY < 475){
		radiuss = 110;
		if(clicked == true){
			playerInput = rockValue;
			ComputerInput();
			Caalculate();
		}
	}else{
		radiuss = 100;
	}
	//scissor
	if (mouseX > windowWidth/2+165 && mouseX < windowWidth/2+380 && mouseY > 275 && mouseY < 475){
		radiusss = 110;
		if(clicked== true){
			playerInput = scissorValue;
			ComputerInput();
			Caalculate();
		}
	}else{
		radiusss = 100;
	}
	clicked=false;
};
var ergebniss= 'LETS START';
var lost = 'COM WON';
var won = 'YOU WON!';
var tie = 'ITS A TIE'
//calculate
function Caalculate(){
	if(playerInput == ComInput){
		ergebniss = tie;
	}
	if(playerInput == rockValue){
		if(ComInput == paperValue){
			ergebniss = lost;
			return ScoreCom++;
		}else if(ComInput == scissorValue){
			ergebniss = won;
			
			return ScorePlayer++;
		}
	}
	if(playerInput == scissorValue){
		if(ComInput== rockValue){
			ergebniss = lost;
			return ScoreCom++;
		}else if(ComInput == paperValue){
			ergebniss = won;
			return ScorePlayer++;
		}
		
	}
		if(playerInput == paperValue){
			if(ComInput == scissorValue){
				ergebniss = lost;
				return ScoreCom++;
		}	else if ( ComInput == rockValue){
				ergebniss = won;
				return ScorePlayer++;
		}
	}
	
}
