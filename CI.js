function ci(){
	var p=document.getElementById('name1').value;
	var n=document.getElementById('name2').value;
	var r=document.getElementById('name3').value;
	var a4 = parseInt(p)*(1 + ((parseInt(r))/100)) **parseInt(n);
	
	document.getElementById('name4').value=a4;
	
	if(document.getElementById('name1').value.length==0){
	document.getElementById('name5').value='Enter ALL The Values';
	}
	if(document.getElementById('name2').value.length==0){
	document.getElementById('name5').value='Enter ALL The Values';
	
	}	
	if(document.getElementById('name2').value.length==0){
	document.getElementById('name5').value='Enter ALL The Values';
	}
}
	
