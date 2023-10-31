/*1.1 Lesson - Your first aplication*/
document.write("It's my first app!")

var y = 55;
var Y = "abc";
var _y = 1.2;
document.writeln(y);
document.writeln(Y);
document.writeln(_y);

var x = 55;
var x2 = x / 'text';
var x3 = x / 0;
document.writeln(x);
document.writeln(x2);
document.writeln(x3);

/* 
Assignment operators:
+= operator
-= operator
*= operator
/= operator
%= operator
<<= operator
>>= operator
>>>= operator
&= operator
^= operator
|= operator
**= operator
*/

let a = 8;
a *= 2;
a -= 7;
document.writeln(a);

/*
Arithmetic operators
+ operator – addition
- operator – subtraction
* operator – multiplication
** operator – exponentiation
/ operator – division
% operator – modulus
++ operator – increment
-- operator – decrement
*/

let b = 1 + 4 //5
let c = 5 - 1 //4
let d = 2 * -4 //-8
let e = 2 / 4 // 0.5
let f = 5 % 3 // 2
f++ // 3
d-- //-9
document.writeln(b);
document.writeln(c);
document.writeln(d);
document.writeln(e);
document.writeln(f);
document.writeln(f++);
document.writeln(d--);

/*
Comparison operators
== operator – verifies if left-hand side is equal to the right-hand side.
=== operator – verifies if left side is equal to right and of the same type.
!= operator – verifies if left side isn’t equal to right.
!== operator – verifies if left side is not equal to the right.
> operator – verifies if left side is greater than right.
< operator – checks if left side is less than right.
>= operator – checks if left side is greater or equal to right.
<= operator – checks if left side is less or equal to right.

const x = 1;

x == 2 //false
x == 1 //true
x == "1" //true
x === 1 //true
x === "1" //false
x != 2 //true
x !== 1 //false
x !== "1" //true
x !== 2 //true
x > 2 //false
x < 2 //true
x >= 2 //false
x <= 2 //true
*/

/*
&& operator – logical and (conjunction) – true only if the left-hand side and right-hand side is true simultaneously.
|| operator – logical or (alternative) – true if the left-hand side is true or if the right-hand side is true (also true if both are true).
! operator – logical not (negation) – changes true into false and false into true.

(1 + 2 == 3) && !(2 + 3 > 4) //false
(1 + 2 == 3) || !(2 + 3 > 4) //true
!(1 + 2 == 3) && !(2 + 3 > 4)  //false
!(1 + 2 == 3) || !(2 + 3 > 4) //false
(1 + 2 == 3) && (2 + 3 > 4)  //true

*/

let g = (!(1+2==3)&&!(2+3>4))=== (!(1+2==3)||!(2+3>4))
document.writeln(g);

/*
Other operators
Type operators:
typeof operator – returns the type of the variable.
instanceof operator – verifies if an object is an instance of a given type and returns a Boolean value as an answer.
Bitwise Operators:
& - bit AND operator
| - bit OR operator
~ - bit NOT operator
^ - bit XOR operator
<< - left shift
>> - right shift
>>> - unsigned right shift
*/