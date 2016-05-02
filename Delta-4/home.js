var c = document.getElementById("checkit");
c.onclick = function(){
	var pa = document.getElementById("pass");
	if(c.checked == true){
		pa.type="text";
	}
	else{
		pa.type = "password";
	}
}
