function myFunction(button){
	var t1=document.getElementById('n1').value;
	var t2=document.getElementById('n2').value;
	var x= button.id;
	switch(x){
		case '1':
		if(t2.length > t1.length){
		document.getElementById('n1').value=t2;	
		document.getElementById('n2').value=t1;
		}
		break;
		case '2':
		if(t1.length > t2.length){
		document.getElementById('n1').value=t2;	
		document.getElementById('n2').value=t1;
		
		}
		break;
	}

}