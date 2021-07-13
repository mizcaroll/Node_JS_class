const myModule = require('./my-module');

console.log(myModule);

/* //Promise-based solution to reading a file. Tends to produce cleaner code compared to callbacks.
//in this example we're importing readFile from the promises namespace. This gives us a function that returns a promise when called.
 const { readFile } = require('fs').promises;

//you can use following function with top-level await from version 14(which we have)
//otherwise, you can wrap the code within an async function as shown. this async-await syntax will make your code a lot easier to read esp when you have multiple async calls in the same function.

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
}

//const file = await readFile('./hello.txt', 'utf8');
//console.log(hello());

//Yall. this promise code did not run successfully. did not output file contents on the console. Anyhu nimewachia hapo. Might be useful */


/* //we can make the code non-blocking by refactoring it to a callback.
//with readFile, we pass the same first 2 arguments and add a callback function as the 3rd.
//inside the function, we can access an error object if the operation fails. 
//when successful, we can access the actual text from the file.
//The Awesome Thing Here Is: even through the text file comes first in the script, its not what is executed first. NODE registers the callback, executes the rest of the script, then finally runs the callback when the file has been read.
const {readFile, readFileSync } = require('fs');

const txt = readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
});
console.log('This is the second line'); 
//script outputs: This is the second line (\n)We are testing the built-in node file system module. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 */
/* //Node File System

const {readFile, readFileSync } = require('fs');

//we can read a text file in node by passing the path to that file and specifying the encoding as utf8
//readFileSync translates to:blocking. i.e the code must be executed first before any other

const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);
console.log('This is the second line'); 
//script outputs: We are testing the built-in node file system module. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (\n)This is the second line

//we can make the code non-blocking by refactoring it to a callback */

/* //create own event by importing an event emmittter from the events module built into node
const { EventEmitter } = require('events');

//create a custom event emmitter by instanciating a class
const eventEmitter = new EventEmitter();

//next we'll register a callback that fires on the lunch event
eventEmitter.on('lunch', () => {
    console.log('yum!');
})

//call eventEmitter.emit() with the event name to trigger the callback function to run
eventEmitter.emit('lunch'); //returns yum! */
