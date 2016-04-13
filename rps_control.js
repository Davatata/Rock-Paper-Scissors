var wins = 0;
var losses = 0;
var draws = 0;
	
function play(guess){
	var random = Math.round(Math.random()*2)+1;
	var pc = "";
	
	if(random == 1) pc = "Rock";
	else if(random == 2) pc = "Paper";
	else pc = "Scissors";
	
	if(guess == pc)
		you_draw(guess,pc);
	else if(guess == "Rock" && pc == "Paper")
		you_lose(guess,pc);
	else if(guess == "Rock" && pc == "Scissors")
		you_win(guess,pc);
	else if(guess == "Paper" && pc == "Rock")
		you_win(guess,pc);
	else if(guess == "Paper" && pc == "Scissors")
		you_lose(guess,pc);
	else if(guess == "Scissors" && pc == "Rock")
		you_lose(guess,pc);
	else if(guess == "Scissors" && pc == "Paper")
		you_win(guess,pc);
		
	$(".new_game").hide();
	$("#display").show();
};

function you_win(guess, pc){
	$("#result").html("You Won!");
	$("#result1").addClass("success");
	$("#beats").html(guess + " beats " + pc + "!");
	setW();
}

function you_draw(guess, pc){
	$("#result").html("You Drew");
	$("#result1").addClass("secondary");
	$("#beats").html(guess + " draws " + pc);
	setD();
}

function you_lose(guess, pc){
	$("#result").html("You Lost");
	$("#result1").addClass("alert");
	$("#beats").html(pc + " beats " + guess);
	setL();
}

function new_game(){
	unBold();
	$(".new_game").show();
	$("#display").hide();
	$("#result1").removeClass("alert secondary success");
}

function unBold(){
	$("#W").html("Wins:"+wins);
	$("#D").html("Draws:"+draws);
	$("#L").html("Losses:"+losses);
}

function setW(){
	wins++;
	unBold();
	$("#W").html("<strong>Wins:"+wins+"</strong>");
	
}

function setD(){
	draws++;
	unBold();
	$("#D").html("<strong>Draws:"+draws+"</strong>");
}

function setL(){
	losses++;
	unBold();
	$("#L").html("<strong>Losses:"+losses+"</strong>");
}

function makeGuesses(n){
	for(var i = 0; i<n; i++){
		var ran = Math.round(Math.random()*2)+1;

		if(ran == 1) play('Rock');
		else if(ran == 2) play('Paper');
		else  play('Scissors');

		new_game();
	}
	return;
}