//Node File System

const {readFile, readFileSync } = require('fs');

//we can read a text file in node by passing the path to that file and specifying the encoding as utf8
//readFileSync translates to:blocking. i.e the code must be executed first before any other

const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);
console.log('This is the second line'); //outputs: We are testing the built-in node file system module. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (\n)This is the second line

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
