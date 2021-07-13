//create own event by importing an event emmittter from the events module built into node
const { EventEmitter } = require('events');

//create a custom event emmitter by instanciating a class
const eventEmitter = new EventEmitter();

//next we'll register a callback that fires on the lunch event
eventEmitter.on('lunch', () => {
    console.log('yum');
})

//call eventEmitter.emit() with the event name to trigger the callback function to run
eventEmitter.emit('lunch');
