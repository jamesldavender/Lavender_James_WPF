// Name: James Lavender
// 5/29/2013
// Assignment: Functions
// Industry

// JavaScript

// Volume of an Office Building.

var width = prompt ("Please enter the width of the building."); // Width of building.
var height = prompt ("Please enter the height of the building."); // Height of building.
var depth = prompt ("Please enter the depth of the building."); // Depth of building

// Anonymous function, and has 3 operators.
var calcVolume = function(width, height, depth){ // Defining the function.
	var volume = width * height * depth;
	return volume;
}

var a = calcVolume(width, height, depth); // This invokes the function.

//(var <= var) ? alert() : alert();

alert("The volume of the build is " + a + " cubic inches. \n\nThe width was " + width + " inches, height was " + height + " inches, and the depth was " + depth + " inches."); // This outputs to alert.