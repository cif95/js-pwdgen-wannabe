const firstName = prompt("What's your first name?");
console.log(firstName);
const lastName = prompt("What's your last name?");
console.log(lastName);
const favColor = prompt("What's your favorite color?");
console.log(favColor);

console.log(
	`	
		${firstName} this is the first name,
		${lastName} this is the last name,
		${favColor} this is the favorite color,
	`
);

let psw = (
	`
		${firstName}${lastName}${favColor}21
	`
);

document.getElementById("psw").innerHTML = psw;