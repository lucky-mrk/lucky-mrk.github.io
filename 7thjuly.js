function add(){
	console.log('hello');
	var a=document.getElementById('n1').value;
	console.log(a*2);
	
}

function cl(){
	var c=document.getElementById('n1').value;
	document.getElementById('n1').value="";
	
	//var d=c*2;
	document.getElementById('r1').textContent= 'Result is  '+ c*2;
	
}