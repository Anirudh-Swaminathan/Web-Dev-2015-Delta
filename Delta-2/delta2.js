var btn = document.getElementById("btn");
var id = 0;
var val;
btn.onclick = function(){
	val = prompt("Enter a value");
			
	var newdiv = document.createElement("div");
	var newval = document.createElement("div");
	document.getElementById("graph").appendChild(newdiv);
	document.getElementById("values").appendChild(newval);
	newdiv.className = 'bar';
	newval.className = 'val';
	id = id+1;
	//newdiv.id = id;
	newdiv.setAttribute('id',val.toString());
	newval.innerHTML = val;
	//newdiv.setAttribute('val',val);
	//newdiv.innerHTML = val;
	val = val.toString();
	val = val.concat("px");
	newdiv.style.height = val;
			
	var red = Math.round(Math.random()*255);
	var green = Math.round(Math.random()*255);
	var blue = Math.round(Math.random()*255);
	newdiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
		
var sort = document.getElementById("sort");
sort.onclick = function(){
	var container = document.getElementById("graph");
	var container1 = document.getElementById("values");
	var elements = container.childNodes;
	var elements1 = container1.childNodes;
	var sortMe = [];
	var sortMe1 = [];
			//alert("Sorting");
	for(var i=0; i<elements.length; ++i){
		var a = elements[i].id;
		a = 1*a;
		sortMe.push([a,elements[i]]);
	}
	for(var i=0; i<elements1.length; ++i){
		var a =elements1[i].innerHTML;
		sortMe1.push([a,elements1[i]]);
	}
			
	sortMe.sort(function(x,y){
		return x[0]-y[0];
	});
	sortMe1.sort(function(a,b){
		return a[0]-b[0];
	});
			
			//alert('Sorted');
			
	for(var i=0; i<sortMe.length; ++i){
		container.appendChild(sortMe[i][1]);
	}
	for(var i=0; i<sortMe1.length; ++i){
		container1.appendChild(sortMe1[i][1]);
	}
			/*
			for(var i=0; i<=id; i++){
				if(!elements[i].id){
					continue;
				}
				
			}
			var sortPart = elements[i].id.style.height;
			sortMe.push([1*sortPart,element[i]);
			sortMe.sort(function(x,y){
				return x[0]-y[0];
			});
			for(var i=0; i<sortMe.length; ++i){
				container.appendChild(sortMe[i][1]);
			}	
			//var toSort = document.getElementById("graph").children;
			//toSort = Array.prototype.slice.call(toSort,0);
			/
			toSort.sort(function(a,b){
				var h1 = a.style.height;
				var h2 = b.style.height;
				return h1 - h2;
			})
			*/
			//var divs = container.getElementsByTagName('')
};
function draw() {
 var canvas = document.getElementById("canvas");
 if (null==canvas || !canvas.getContext) return;
 var axes={}, ctx=canvas.getContext("2d");
 //axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
 //axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
 //axes.x0 = 10px;
 //axes.y0 = 10;
 //axes.scale = 40;                 // 40 pixels from x=0 to x=1
 //axes.doNegativeX = true;
 //showAxes(ctx,axes);
 var xPadding = 30;
 var yPadding = 30;
 ctx.beginPath();
 ctx.moveTo(xPadding,0);
 ctx.lineTo(xPadding,canvas.height - yPadding);
 ctx.lineTo(graph.width,graph.height - yPadding);
 c.stroke();
}
/*
function showAxes(ctx,axes) {
 var x0=axes.x0, w=ctx.canvas.width;
 var y0=axes.y0, h=ctx.canvas.height;
 var xmin = axes.doNegativeX ? 0 : x0;
 ctx.beginPath();
 ctx.strokeStyle = "rgb(128,128,128)"; 
 ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
 ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
 ctx.stroke();
}
*/
