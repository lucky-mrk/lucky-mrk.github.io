function gen(){
	
	var str='<table>';
	var i=0;
	for(i=1;i<=5;i++){
		str=str + '<tr><td>Apple '+i+'</td></tr>';
	}
	str=str+ '</table>';
	document.getElementById('s1').innerHTML=str;
}

function gen1(){
	
	var str='<table class="table table-hover">';
	
	var i=0;
	var t1=document.getElementById('n1').value;
	var t2=document.getElementById('n2').value;
	for(i=1;i<=t2;i++){
		str=str + '<tr class bgcolor="seashell"><td>'+(i)+'</td><td>*</td><td>'+(t1)+'</td><td>=</td><td>'+(i*t1)+'</td></tr>';
	}
	str=str+ '</table>';
	document.getElementById('s1').innerHTML=str;
}