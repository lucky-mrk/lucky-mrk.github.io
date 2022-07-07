function circle(){
var a= document.getElementById('n1').value;
var r1=(3.14)*(a*a);
var r2=2*(3.14)*a;
document.getElementById('n2').value=r1;
document.getElementById('n3').value=r2;
if(document.getElementById('n1').value.length==0){
	document.getElementById('n4').value='Enter ALL The Values';
	}
}