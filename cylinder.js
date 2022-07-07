function cylinder(){
var r= document.getElementById('n1').value;
var h= document.getElementById('n2').value;
var r1=2*(3.14)* parseInt(r)*parseInt(h) + 2*(3.14)* parseInt(r*r) ;
var r2=(3.14)*(r*r)*h;
document.getElementById('n3').value=r1;
document.getElementById('n4').value=r2;

if(document.getElementById('n1').value.length==0){
	document.getElementById('n5').value='Enter ALL The Values';
	}
if(document.getElementById('n2').value.length==0){
	document.getElementById('n5').value='Enter ALL The Values';
	}
}

