const firstName = prompt("What's your first name?");
const lastName = prompt("What's your last name?");
const favColor = prompt("What's your favorite color?");

console.log(
	`	
		${firstName} this is the first name,
		${lastName} this is the last name,
		${favColor} this is the favorite color,
	`
);

let psw = firstName + lastName + favColor + 21;
console.log(psw);

document.getElementById("my-psw").innerHTML = psw;