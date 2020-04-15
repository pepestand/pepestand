function addCardAt(x,y,w,value){
	var card = document.createElement("img");
	console.log(card);



	card.src="cardimages/PNG/"+value+".png";
	card.width = w;
	card.style = "position:absolute; left:"+x+"; top:"+y+";height:auto";
	document.body.append(card);


}

function addPlayerAt(x,y,name,money){
	var playerBox = document.createElement("div");
	playerBox.id = name;


	playerBox.style = "border:1px solid blue;width:200;z-Index=200;position:absolute;";
	playerBox.style.left = x;
	playerBox.style.top = y;

	var profilePicture = document.createElement("img");
	profilePicture.src = "https://pbs.twimg.com/profile_images/874254884421369856/STsgRa7p_400x400.jpg";
	profilePicture.width = 40;
	profilePicture.height = 40;
	playerBox.appendChild(profilePicture);


	var profileName = document.createElement("p");
	profileName.style = "display: inline; left:60px;position: absolute; font-weight: bold;color:white";
	var node = document.createTextNode(name+" $"+money);
	profileName.id = name + "pn";
	profileName.appendChild(node);
	playerBox.appendChild(profileName);

	var card1 = document.createElement("img");
	card1.src = "cardimages/PNG/AH.png";
	card1.style = " position:absolute; width: 40; height:auto; top:-50";
	card1.id = name+"card1";
	playerBox.appendChild(card1);

	var card2 = document.createElement("img");
	card2.src = "cardimages/PNG/AS.png";
	card2.style = " position:absolute; width: 40; height:auto; top:-50; left:80";
	card2.id = name+"card2";
	playerBox.appendChild(card2);


	document.getElementById("tableContainer").appendChild(playerBox);
	//createBetBox(name,100,100);
}

function changePlayerCard1(player,card){
	var playerCard1 = document.getElementById(player+"card1");
	playerCard1.src = "cardimages/PNG/"+card+".png";
}

function changePlayerCard2(player,card){
	var playerCard2 = document.getElementById(player+"card2");
	playerCard2.src = "cardimages/PNG/"+card+".png";
}

function changePlayerCards(player,card1,card2){
	changePlayerCard1(player,card1);
	changePlayerCard2(player,card2);


}


function changePlayerMoney(player,m){
	var name = document.getElementById(player+"pn").innerHTML.split("$")[0];
	document.getElementById(player+"pn").innerHTML = name+"$"+m;


}



function createFlopTurnRiver(visible = true){
	var flop = document.createElement("div");
	flop.style = "border:0px solid blue;width:200;z-Index=200;position:absolute;top:40%;left:40%";
	flop.id = "flop";
	document.getElementById("tableContainer").appendChild(flop);

	var flop1 = document.createElement("img");
	flop1.id = "flop1";
	flop1.src = "cardimages/PNG/gray_back.png";
	flop1.style = "width: 40; height:auto; top:-70";
	flop.appendChild(flop1);

	var flop2 = document.createElement("img");
	flop2.id = "flop2";
	flop2.src = "cardimages/PNG/gray_back.png";
	flop2.style = "width: 40; height:auto; top:-70";
	flop.appendChild(flop2);

	var flop3 = document.createElement("img");
	flop3.id = "flop3";
	flop3.src = "cardimages/PNG/gray_back.png";
	flop3.style = "width: 40; height:auto";
	flop.appendChild(flop3);

	var turn = document.createElement("img");
	turn.id = "turn";
	turn.src = "cardimages/PNG/gray_back.png";
	turn.style = "width: 40; height:auto; top:-70";
	flop.appendChild(turn);

	var river = document.createElement("img");
	river.id = "river";
	river.src = "cardimages/PNG/gray_back.png";
	river.style = "width: 40; height:auto; top:-70";
	flop.appendChild(river);

	if(!visible){
		flop1.style.visibility = "hidden";
		flop2.style.visibility = "hidden";
		flop3.style.visibility = "hidden";
		turn.style.visibility = "hidden";
		river.style.visibility = "hidden";

	}




}




function changeFlop1(card){
	document.getElementById("flop1").src = "cardimages/PNG/"+card+".png";

}

function changeFlop2(card){
	document.getElementById("flop2").src = "cardimages/PNG/"+card+".png";

}

function changeFlop3(card){
	document.getElementById("flop3").src = "cardimages/PNG/"+card+".png";

}

function changeTurn(card){
	document.getElementById("turn").src = "cardimages/PNG/"+card+".png";

}

function changeRiver(card){
	document.getElementById("river").src = "cardimages/PNG/"+card+".png";

}


function changeFlop(card1,card2,card3){
	changeFlop1(card1);
	changeFlop2(card2);
	changeFlop3(card3);
}

function changeBoard(card1,card2,card3,card4,card5){
	changeFlop(card1,card2,card3);
	changeTurn(card4);
	changeRiver(card5);
}



function turnAroundBoard(){
	document.getElementById("flop1").src = "cardimages/PNG/gray_back.png";
	document.getElementById("flop2").src = "cardimages/PNG/gray_back.png";
	document.getElementById("flop3").src = "cardimages/PNG/gray_back.png";
	document.getElementById("turn").src = "cardimages/PNG/gray_back.png";
	document.getElementById("river").src = "cardimages/PNG/gray_back.png";

}

function turnAroundFlop(){
	document.getElementById("flop1").src = "cardimages/PNG/gray_back.png";
	document.getElementById("flop2").src = "cardimages/PNG/gray_back.png";
	document.getElementById("flop3").src = "cardimages/PNG/gray_back.png";
}

function turnAroundTurn(){
	document.getElementById("turn").src = "cardimages/PNG/gray_back.png";
}

function turnAroundRiver(){
	document.getElementById("river").src = "cardimages/PNG/gray_back.png";
}





/*

addPlayerAt("80%","20%","player1",500);
addPlayerAt("10%","20%","player2",500);
addPlayerAt("5%","90%","player3",500);
addPlayerAt("35%","90%","player4",500);
addPlayerAt("45%","90%","player5",500);
addPlayerAt("55%","90%","player6",500);
addPlayerAt("65%","90%","player7",500);
addPlayerAt("75%","90%","player8",500);
addPlayerAt("85%","90%","player9",500);

changePlayerMoney("player3",100);

changePlayerCard1("player1","KH");
changePlayerCard2("player1","KD");

changePlayerCards("player2","7C","7D");

*/







//draging

/*
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {

    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {

    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("player1betBox"));
dragElement(document.getElementById("player2betBox"));
dragElement(document.getElementById("player3betBox"));
dragElement(document.getElementById("player4betBox"));
dragElement(document.getElementById("player5betBox"));
dragElement(document.getElementById("player6betBox"));
dragElement(document.getElementById("player7betBox"));
dragElement(document.getElementById("player8betBox"));
dragElement(document.getElementById("player9betBox"));

*/
var p = document.createElement("p");
p.id="cords";
p.style  = "position: absolute; left: 1000";
document.body.appendChild(p);

function getCords(){

	var p = document.getElementById("cords");
	p.innerHTML = "";
	for(var i=1;i<=9;i++){
		var cordL = document.getElementById("player"+i+"betBox").style.left;
		var cordT = document.getElementById("player"+i+"betBox").style.top;
		p.innerHTML = p.innerHTML + "<br>" + "player"+i+" L:"+cordL+" T:"+cordT;

	}



	console.log(p);


}



function placePlayers(n){
	var coords = [{x:null, y:null}, {x: 435, y: 449}, {x: 227, y: 436}, {x: 57, y: 365}, {x: 0, y: 215}, {x: 149, y: 96}, {x: 392, y: 71}, {x: 643, y: 96}, {x: 767, y: 271}, {x: 636, y: 403}];
	var betBoxCoords = [{x:null, y:null}, {x: 477, y: 367}, {x: 329, y: 357}, {x: 222, y: 328}, {x: 211, y: 224}, {x: 271, y: 146}, {x: 459, y: 120}, {x: 705, y: 142}, {x: 727, y: 244}, {x: 637, y: 323}];

	for(var i = 1; i <= n; i++){
		//console.log(coords[i].x + " " + coords[i].y);
		var x = coords[i].x;
		var y = coords[i].y;
		addPlayerAt(x,y,"player"+i,500);
		var bx = betBoxCoords[i].x;
		var by = betBoxCoords[i].y;
		createBetBox("player"+i,bx,by);



	}
}


function createBetBox(player,x,y){
	var betBox = document.createElement("div");
	betBox.id = player+"betBox";


	betBox.style = "border:1px solid red;z-Index=200;position:absolute;font-weight: bold;color:white";
	betBox.style.left = x;
	betBox.style.top = y;
	betBox.innerHTML = "$ 0";
	document.getElementById("tableContainer").appendChild(betBox);
}

//createBetBox("player1",100,100);


function changeBetBox(player,money){
	document.getElementById(player+"betBox").innerHTML = "$"+money;
}

function highlightBetBox(player,color){
	document.getElementById(player+"betBox").style.border = "4px solid " + color;
}

function unhighlightBetBox(player){
	document.getElementById(player+"betBox").style.border = "1px solid red";
}

function highlightPlayerBox(player,color){
	document.getElementById(player).style.border = "4px solid " + color;
}

function unhighlightPlayerBox(player){
	document.getElementById(player).style.border = "1px solid blue";
}




function addPotAt(x,y){
	var potBox = document.createElement("div");
	potBox.id = "pot";


	potBox.style = "border:1px solid red;z-Index=200;position:absolute;font-weight: bold;color:white";
	potBox.style.left = x;
	potBox.style.top = y;
	potBox.innerHTML = "$ 0";
	document.getElementById("tableContainer").appendChild(potBox);
}





function hideBetBox(player){
	document.getElementById(player+"betBox").style.visibility = "hidden";

}

function showBetBox(player){
	document.getElementById(player+"betBox").style.visibility = "visible";

}

function toggleBetBox(player){
	var state = document.getElementById(player+"betBox").style.visibility;
	console.log(state);
	if(state == "visible" || state == ""){
		document.getElementById(player+"betBox").style.visibility = "hidden";
	}
	else{
		document.getElementById(player+"betBox").style.visibility = "visible";
	}
}



function createBasicTable(n){
	placePlayers(n);
	createFlopTurnRiver(true);
	addPotAt("50%","55%");

}


function addNextPreButton(){
	let buttonBox = document.createElement("div");
	buttonBox.id = "buttonBox";


	buttonBox.style = "border:1px solid red;z-Index=300;position:absolute;font-weight: bold;color:white; left:80%";
	let nextButton = document.createElement("button");
	nextButton.id = "nextButton";
	nextButton.innerHTML ="-->";
	let preButton = document.createElement("button");
	preButton.id = "preButton";
	preButton.innerHTML = "<--";
	buttonBox.appendChild(preButton);
	buttonBox.appendChild(nextButton);

	document.getElementById("tableContainer").appendChild(buttonBox);

}

addNextPreButton();
