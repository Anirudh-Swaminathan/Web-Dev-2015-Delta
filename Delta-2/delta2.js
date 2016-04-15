var btn = document.getElementById("btn");
		var id = 0;
		var val;
		btn.onclick = function(){
			val = prompt("Enter a value");
			
			var newdiv = document.createElement("div");
			document.getElementById("graph").appendChild(newdiv);
			newdiv.className = 'bar';
			id = id+1;
			//newdiv.id = id;
			newdiv.setAttribute('id',val.toString());
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
			var elements = container.childNodes;
			var sortMe = [];
			//alert("Sorting");
			for(var i=0; i<elements.length; ++i){
				var a = elements[i].id;
				a = 1*a;
				sortMe.push([a,elements[i]]);
			}
			
			sortMe.sort(function(x,y){
				return x[0]-y[0];
			});
			
			//alert('Sorted');
			
			for(var i=0; i<sortMe.length; ++i){
				container.appendChild(sortMe[i][1]);
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