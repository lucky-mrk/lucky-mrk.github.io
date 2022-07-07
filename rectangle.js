function rectangle(){
var l= document.getElementById('n1').value;
var w= document.getElementById('n2').value;
var r1=l*w;
var r2=2*(parseInt(l)+ parseInt(w));
document.getElementById('n3').value=r1;
document.getElementById('n4').value=r2;

if(document.getElementById('n1').value.length==0){
	document.getElementById('n5').value='Enter ALL The Values';
	}
if(document.getElementById('n2').value.length==0){
	document.getElementById('n5').value='Enter ALL The Values';
	}
}

