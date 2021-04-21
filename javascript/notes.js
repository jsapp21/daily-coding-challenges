/*
1- reverse a string (without using ther reverse method)
2- find out if a given string is a palindrome. kayak mom racecar (without using ther reverse method)
3- given an array of integers find the most repeated number
	findMostRepeated([4,3,2,4,4,4,4,4,3,3,6,6,6,1,1,4,4,4]) = 4


https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4

JAVASCRIPT 
Developed by Brendan Eich in 1995.
JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

Seven types into which all data falls: numbers, strings, booleans, symbols, Objects, null, and undefined
Arrays are Objects!

SCOPE
Where declared variables and methods are avaiable. Global scope is available to the whole file. Function scope are inside the funciton body that we can refernce variables and functions declared inside the functions scope. Block Scope is parital supported for ES2015 (const and let - supported) (var not supported).

Scope Chain
Lexical Scoping 

HOISTING
Declare all of your functions at the top of their scope.  If the functions are declared in the global scope, simply put them at the top of the JavaScript file. If they're declared inside another function, put the declaration at the top of the function body. Only use const and let. Never use var.


CLOSURES
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

Lexical Scoping 

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}

init();


Closure

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();

myFunc();


CALLBACKS
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined. A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

PROMISES
Sending asynchronous requests and waiting for the code to be returned then it can do something. Promises can be pending, fulfilled and rejected. Promoise objects support two properties: state and result. 

Variables
All varialbes are set to undefinted in JS till they are defined. 

https://www.w3schools.com/js/js_object_prototypes.asp

JS Object Prototypes
All JavaScript objects inherit properties and methods from a prototype.

RECURSION
Function that calls itself inside it self till it reaches the end result. 

ARROW FUNCTION
Implicit return, this does not have binding to surrounding scope


Concatenative inheritance:
The process of inheriting features directly from one object to another by copying the source objects properties. In JavaScript, source prototypes are commonly referred to as mixins. Since ES6, this feature has a convenience utility in JavaScript called `Object.assign()`. Prior to ES6, this was commonly done with Underscore/Lodash’s `.extend()` jQuery’s `$.extend()`, and so on… The composition example above uses concatenative inheritance.

Prototype delegation: 
In JavaScript, an object may have a link to a prototype for delegation. If a property is not found on the object, the lookup is delegated to the delegate prototype, which may have a link to its own delegate prototype, and so on up the chain until you arrive at `Object.prototype`, which is the root delegate. This is the prototype that gets hooked up when you attach to a `Constructor.prototype` and instantiate with `new`. You can also use `Object.create()` for this purpose, and even mix this technique with concatenation in order to flatten multiple prototypes to a single delegate, or extend the object instance after creation.

Functional inheritance: 
In JavaScript, any function can create an object. When that function is not a constructor (or `class`), it’s called a factory function. Functional inheritance works by producing an object from a factory, and extending the produced object by assigning properties to it directly (using concatenative inheritance). Douglas Crockford coined the term, but functional inheritance has been in common use in JavaScript for a long time.

As you’re probably starting to realize, concatenative inheritance is the secret sauce that enables object composition in JavaScript, which makes both prototype delegation and functional inheritance a lot more interesting.
When most people think of prototypal OO in JavaScript, they think of prototype delegation. By now you should see that they’re missing out on a lot. Delegate prototypes aren’t the great alternative to class inheritance — object composition is.

Class Inheritance: 
Syntax sugar for ES6 constructor. 
instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.

Prototypal Inheritance: 
instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.

COMPOSITION
https://youtu.be/wfMtDGfHWpA
https://ui.dev/javascript-inheritance-vs-composition/

Inheritance is when you design your types around what they are. Composition is design your types around what they do.
Object.assign() makes a new object w/ the proprites of the other object assinged to it.


DESIGN PATTERNS
Design patterns are documented solutions to commonly occurring problems in software engineering. 
Engineers don’t have to bang their heads on the problems that someone else has already solved.
https://www.telerik.com/blogs/design-patterns-in-javascript


REACT:
one way data flow (state, props)
One way data flow means that the model is the single source of truth. 
Changes in the UI trigger messages that signal user intent to the model (or “store” in React). 
Only the model has the access to change the app’s state. 
The effect is that data always flows in a single direction, which makes it easier to understand.
One way data flows are deterministic, whereas two-way binding can cause side-effects which are harder to follow and understand.


STATE
States are the heart of React components. States are the source of data and must be kept as simple as possible. 
Basically, states are the objects which determine components rendering and behavior. 
They are mutable unlike the props and create dynamic and interactive components.

PROPS
Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. 
They are always passed down from the parent to the child components throughout the application. 
A child component can never send a prop back to the parent component. 
This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.


PHASES OF COMPONENTS LIFECYCLE
Initial Rendering Phase: 
This is the phase when the component is about to start its life journey and make its way to the DOM.
Updating Phase: 
Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
Unmounting Phase: 
This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.
 

LIFECYCLE METHODS
componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
componentDidMount() – Executed on the client side only after the first render.
componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
componentWillUpdate() – Called just before rendering takes place in the DOM.
componentDidUpdate() – Called immediately after rendering takes place.
componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.


Higher Order Components(HOC)
Higher Order Component is an advanced way of reusing the component logic. 
Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. 
They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. 
You can say that HOC are ‘pure’ components.

HOC can be used for many tasks like:
Code reuse, logic and bootstrap abstraction
Render High jacking
State abstraction and manipulation
Props manipulation

What are Pure Components
Pure components are the simplest and fastest components which can be written. 
They can replace any component which only has a render(). 
These components enhance the simplicity of the code and performance of the application.


REDUX
Redux is one of the most trending libraries for front-end development in today’s marketplace. 
It is a predictable state container for JavaScript applications and is used for the entire applications state management.
Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.

Three principles that Redux follows
Single source of truth: 
The state of the entire application is stored in an object/ state tree within a single store. 
The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
State is read-only: 
The only way to change the state is to trigger an action. 
An action is a plain JS object describing the change. 
Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 
Changes are made with pure functions: 
In order to specify how the state tree is transformed by actions, you need pure functions. 
Pure functions are those whose return value depends solely on the values of their arguments.



*/
// closure example 

function create() {
	let counter = 0
	return {
		increment: function() {
        	counter++
    	},
    	print: function() {
        	console.log(counter)
    	}
	}
}
var c = create()
c.increment()
c.print()




function isPalindrome(str) {
	for(let i = 0; i< str.length; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false
		}
	}
	return true
}

// console.log(isPalindrome('kbyak'))

/*
i     0123456
str = racecar

str[0] === str[6]
str[1] === str[5]
str[2] === str[4]

lsadfkfhgkasjdfhgliskafdgslakfdghdlskfghklsdjfh

*/

function reverseString(str) {
	let newString = '';
	
	for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;

}

reverseString('hello')

// 2nd option with built-in functions 
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


// given an array of integers find the most repeated number 
const arr = [4,3,2,4,4,4,4,4,3,3,6,6,6,1,1,4,4,4]

function findMostRepeated(arr) {
  const counts = {};
  let maxCount = 0;
  let maxKey;

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const count = (counts[key] = (counts[key] || 0) + 1);
    if (count > maxCount) {
      maxCount = count;
      maxKey = key;
    }
  }
  
  return maxKey;
}

findMostRepeated(arr);

// COUNT UP & DOWN - O(n)
const countUpAndDown = (n) => {
    console.log('up');
    for (let i=0; i < n; i++) {
        console.log(i);
    }
    
    console.log('at top');
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }

    console.log('down');
}

countUpAndDown(6);


// ADD UP TO - 
const addUpTo = (n) => {
    let total = 0;
    for (let i=1; i <= n; i++){
        total += i;
    }
    return total;
}

addUpTo(6);


// PRINT ALL PAIRS FROM ONE NUMBER - O(n2)squared -  b/c it's a nested loop
const printAllPairs = (n) => {
    for (let i=0; i < n; i++) {
        for (let j=0; j <n ; j++) {
            console.log(i, j);
        }
    }
}

printAllPairs(5);


// Prints at LEAST 5, O(n)
const logAtLeast5 = (n) => {
    for (let i=1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(9)


// Prints at MOST 5, O(1)
const logAtMost5 = (n) => {
    for (let i=1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

logAtMost5(9)
