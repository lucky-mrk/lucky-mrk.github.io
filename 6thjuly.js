function cal(){
console.log('Hello');
}

function add(){
	var a1=document.getElementById('name1').value;
	var a2=document.getElementById('name2').value;
	var a3=document.getElementById('name3').value;
	var a4 = (parseInt(a1)* parseInt(a2) * parseInt(a3))/100;
	document.getElementById('name4').value=a4;
	if(document.getElementById('name1').value.length==0){
		//alert("empty");
		document.getElementById('name5').value='Enter ALL The Values';
	}
	if(document.getElementById('name2').value.length==0){
		//alert("empty");
		document.getElementById('name5').value='Enter ALL The Values';
	}
	if(document.getElementById('name3').value.length==0){
		//alert("empty");
		document.getElementById('name5').value='Enter ALL The Values';
	}
	
}

	