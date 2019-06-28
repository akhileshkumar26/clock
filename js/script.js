

 let mydeg = 0;
  const secondPin = document.getElementById('second_pin');
  function rotate(deg){

 	const secondPin = document.getElementById('second_pin');
 	console.log(secondPin);
  	secondPin.style.transform = 'rotate('+deg+'deg)';
 }

setInterval(function(){
	let deg = 0 || mydeg;
	rotate(deg);
	mydeg = deg + 6;
	if(mydeg == 360){
		mydeg = 0;
	}
}, 1000);


for(let i = 1; i<= 12; i++){
	let degree = (360 / 12) * i;
	let element = '<span style="transform: rotate('+degree+'deg)">'+i+'</span>';
	let node = document.createElement("div");
	let span = document.createElement("span");
	var textnode = document.createTextNode(i);
	node.style.transform = 'rotate('+degree+'deg)';
	node.style.position = 'absolute';
	node.style.width= '85%';
	node.style.height= '90px';
	node.style.top= '85px';
	node.style.left= '20px';
	span.appendChild(textnode);
	let newdeg = - degree - 70;
	span.style.transform = 'rotate('+newdeg+'deg)';
	node.appendChild(span);
	document.getElementById("outer_circle").appendChild(node);
}