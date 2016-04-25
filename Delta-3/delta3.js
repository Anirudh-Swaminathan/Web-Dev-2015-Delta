
var moveIt = document.getElementById('moveIt');

if(localStorage.getItem("top")!== null) document.getElementById("moveIt").style.top = parseInt(localStorage.getItem("top"))+"px";
else document.getElementById("moveIt").style.top = 0+"px";
if(localStorage.getItem("left")!==null) document.getElementById("moveIt").style.left = parseInt(localStorage.getItem("left"))+"px";
else document.getElementById("moveIt").style.left = 0+"px";


var red = Math.round(Math.random()*255);
var green = Math.round(Math.random()*255);
var blue = Math.round(Math.random()*255);
moveIt.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

//document.getElementById("moveIt").style.top = parseInt(localStorage.getItem("top"));
//document.getElementById("moveIt").style.left = parseInt(localStorage.getItem("left"));
//Need to initialize the position.



//moveIt.style.backgroundColor = rgb()
document.body.onkeydown = function(eve){
	var e = eve.keyCode || eve.which;
	//e = e.which;
	//var charTop = parseInt(moveIt.style.top);
	//var charLeft = parseInt(moveIt.style.left);
	if(e === 40){ //down
		//alert('Down Pressed');
		
		document.getElementById("moveIt").style.top = (parseInt(document.getElementById("moveIt").style.top)) + 5 +"px";
	}
	else if(e === 37){ //left
		
		document.getElementById("moveIt").style.left = (parseInt(document.getElementById("moveIt").style.left)) - 5 +"px";
	}
	else if(e === 38){//up
		
		moveIt.style.top = (parseInt(moveIt.style.top)) - 5 +"px";
	}
	else if(e === 39){//right
		
		moveIt.style.left = (parseInt(moveIt.style.left)) + 5 +"px";		
	}
	//localStorage.removeItem("top");
	//localStorage.removeItem("left");
	localStorage.setItem("top",moveIt.style.top);
	localStorage.setItem("left",moveIt.style.left);
	
}
/*
//Below code is for sessionStorage.
window.onload = function(){
	if(sessionStorage.getItem('top') == null){
		return;
	}
	else{
		var topy = sessionStorage.getItem('top');
		if(topy !== null) document.getElementById('moveIt').style.top = parseInt(topy);
		
		var lefty = sessionStorage.getItem('left');
		if(lefty!== null) document.getElementById('moveIt').style.left = parseInt(lefty);
	}
}
window.onbeforeunload = function(){
	sessionStorage.setItem("top",document.getElementById('moveIt').style.top);
	sessionStorage.setItem("left",document.getElementById('moveIt').style.left);
}
*/