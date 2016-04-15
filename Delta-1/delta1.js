var one = document.getElementById("one");
	var two = document.getElementById("two");
	
	var red1 = Math.round(Math.random()*255);
	var green1 = Math.round(Math.random()*255);
	var blue1 = Math.round(Math.random()*255);
	one.style.backgroundColor = "rgb(" + red1 + "," + green1 + "," + blue1 + ")";
	
	var red2 = Math.round(Math.random()*255);
	var green2 = Math.round(Math.random()*255);
	var blue2 = Math.round(Math.random()*255);
	two.style.backgroundColor = "rgb(" + red2 + "," + green2 + "," + blue2 + ")";
	
	
	one.onclick = function(){
		var red = Math.round(Math.random()*255);
		var green = Math.round(Math.random()*255);
		var blue = Math.round(Math.random()*255);
		two.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
	}
	two.onclick = function(){
		var red = Math.round(Math.random()*255);
		var green = Math.round(Math.random()*255);
		var blue = Math.round(Math.random()*255);
		one.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
	}