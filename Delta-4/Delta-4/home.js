//alert("Hi");
var c = document.getElementById("checkit");
c.onclick = function(){
	//alert("Clicked");
	var pa = document.getElementById("pass");
	if(c.checked == true){
		pa.type="text";
		//alert("Checked");
	}
	else{
		pa.type = "password";
		//alert('UnChecked');
	}
}
function btnClick(){
	//alert("Hi There. I am going to submit.");
	return validate();
}
function validate(){
	var r = document.getElementById("Roll").value;
	var d = document.getElementById("dept").value;
	var y = document.getElementById("year").value;
	//alert('Roll is '+r);
	//alert('1st digit is '+Math.floor(r/Math.pow(10,8)));
	if(Math.floor(r/Math.pow(10,8)) != 1){
		alert('Incorrect Roll Number');
		return false;
	}
	//alert(''+Math.floor(r/Math.pow(10,6)));
	if(!(Math.floor(r/Math.pow(10,6)) ===102 && d === 'Chemical'||Math.floor(r/Math.pow(10,6)) ===106 && d === 'CSE'
		||Math.floor(r/Math.pow(10,6)) ===107 && d === 'EEE'||Math.floor(r/Math.pow(10,6)) ===101 && d === 'Architecture'
	||Math.floor(r/Math.pow(10,6)) ===103 && d === 'Civil'||Math.floor(r/Math.pow(10,6)) ===108 && d === 'ECE')){
		alert('Incorrect department for entered roll Number');
		return false;
	}
	//alert(''+Math.floor(r/Math.pow(10,3))%100);
	if(!(y>=1 && (y==1 && Math.floor(r/Math.pow(10,3))%100 ==15) || (y==2 && Math.floor(r/Math.pow(10,3))%100 ==14) || 
	(y==3 && Math.floor(r/Math.pow(10,3))%100 ==13) ||(y==4 && Math.floor(r/Math.pow(10,3))%100 ==12) ||(y ==5 && d==='Architecture' &&  Math.floor(r/Math.pow(10,3))%100 ==11) )){
		alert('Incorrect year');
		return false;
	}
	return true;
}