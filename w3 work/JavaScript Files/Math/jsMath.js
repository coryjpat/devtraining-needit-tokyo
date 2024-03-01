/* The Math Object
Unlike other objects, the Math object has no constructor.

The Math object is static.

All methods and properties can be used without creating a Math object first.

Math Properties(Constants)
The syntax for any Math property is: Math.property.

JavaScript provides 8 mathematical constants that can be accessed as Math properties:

Example
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E 

Math Methods
The syntax for Math any methods is : Math.method(number)

Number to Integer
There are 4 common methods to round a number to an integer:

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
******************************************************************************************/

/* JavaScript Math Methods
Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between - PI / 2 and PI / 2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x(x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm(base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	Returns if x is negative, null or positive(-1, 0, 1)
sin(x)	Returns the sine of x(x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number(x) 
*********************************************************************************************/

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;

// This JavaScript function always returns a random number between min(included) and max(excluded):
// Example
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// This JavaScript function always returns a random number between min and max(both included):
// Example
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Comparisons and Conditions
// The chapter JS Comparisons gives a full overview of comparison operators.

// The chapter JS If Else gives a full overview of conditional statements.

// Here are some examples:

// Operator	Description	Example
//     == equal to	if (day == "Monday")
// > greater than	if (salary > 9000)
//     <	less than if (age < 18)


/* Everything Without a "Value" is False
The Boolean value of 0(zero) is false: */

let x = 0;
Boolean(x);

/* The Boolean value of - 0(minus zero) is false: */

let x = -0;
Boolean(x);

// The Boolean value of ""(empty string) is false:

let x = "";
Boolean(x);

// The Boolean value of undefined is false:

let x;
Boolean(x);

// The Boolean value of null is false:

let x = null;
Boolean(x);

// The Boolean value of false is(you guessed it) false:

let x = false;
Boolean(x);

// The Boolean value of NaN is false:

let x = 10 / "Hallo";
Boolean(x);

