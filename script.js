// question 1

var petArray = ["cat", "cow", "dog"];
console.log(petArray);

// question 2

var petArray = ["cat", "cow", "dog"];
console.log(petArray[1]);

// question 3

var petArray = ["cat", "cow", "dog"];
console.log(petArray.length);
petArray.push("sheep");
console.log(petArray.length); //in our lesson this is in the exemple, but do i need this line. I think you are asking for this in the next question. ame i right?
console.log(petArray);

// question 4

var petArray = ["cat", "cow", "dog"];
console.log(petArray.length);
petArray.push("sheep");
console.log(petArray.length);

// question 5

var catObject = {
	name: "Topsi",
	colour: "gray",
	age: 1
};
console.log(catObject);

// question 6

var catObject = {
	name: "Topsi",
	colour: "gray",
	age: 1
};
console.log(catObject.age);

// question 7

var catArray = [
	{
		name: "Topsi",
		colour: "gray",
		age: 1
	}
];
console.log(catArray);

// question 8

var catArray = [
	{
		name: "Topsi",
		colour: "gray",
		age: 1
	}
];
for (var i = 0; i < catArray.length; i++) {
	console.log(catArray[i].name);
	console.log(catArray[i].colour);
	console.log(catArray[i].age);
}

// question 9

function logToConsole(animal) {
	console.log(animal);
}

logToConsole("Topsi");

// question 10

function logToConsole(animal) {
	console.log("Animal:" + " " + animal);
}

logToConsole("Cat");
logToConsole("Donkey");
