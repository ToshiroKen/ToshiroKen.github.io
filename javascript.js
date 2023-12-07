function hello_surname(){
	document.getElementById("name").innerHTML = "Kenneth Emmanuel N. Benibe";
	document.getElementById("hello").innerHTML = "";
	document.getElementById("course").innerHTML = "Bachelor of Science in Information Technology";
	document.getElementById("goodbye").innerHTML = "";
}

function vanish(){
	document.getElementById("content").style.display='none';
}

function style1(){
	document.getElementById("styleA").style.fontSize='50px';
}
function style2(){
	document.getElementById("styleB").style.fontSize='15px';
}
function style3(){
	document.getElementById("styleC").style.fontFamily="Impact";
}
function style4(){
	document.getElementById("styleD").style.color="#29E400";
}
function style5(){
	document.getElementById("styleE").style.textAlign="center";
}
function style6(){
	document.getElementById("styleF").style.fontStyle="italic";
}

function show(){
	document.getElementById("hidden").style.display='block';
}

var a, b, add, subtract, multiply, divide;
a = 75; b = 25;

add = a + b; //Addition
subtract = a - b; //Subtraction
multiply = a * b; //Multiplication
divide = a / b; //Division
function operation(){
	document.getElementById("addition").innerHTML = "Addition: " + a + " + " + b;
	document.getElementById("subtraction").innerHTML = "Subtraction: " + a + " - "+ b;
	document.getElementById("multiplication").innerHTML = "Multiplication: " + a + " * " + b;
	document.getElementById("division").innerHTML = "Division: " + a + " / " + b;
}
function plus(){
	document.getElementById("addition").innerHTML = "Addition: " + a + " + " + b + " = " + add;
}
function minus(){
	document.getElementById("subtraction").innerHTML = "Subtraction: " + a + " - "+ b + " = " + subtract;
}
function times(){
	document.getElementById("multiplication").innerHTML = "Multiplication: " + a + " * " + b + " = " + multiply;
}
function quotation(){
	document.getElementById("division").innerHTML = "Division: " + a + " / " + b + " = " + divide;
}


function gone(){
	document.write("WALA NA!");
}