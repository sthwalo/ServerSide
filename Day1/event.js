/**
 * The events module can be used to work with events in Node.js.
 * An EventEmitter object can be created to emit events, add event listeners, and remove event listeners.
 */

const EventEmitter = require('events');
const object = new EventEmitter();

//Add an event listener
object.addListener('spark', () => {
    console.log('Let there be light!');
});

//Emit the event
console.log('Emitting the event...');
object.emit('spark');