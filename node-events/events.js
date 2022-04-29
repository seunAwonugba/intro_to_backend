//two ways to crete an event emitter in  NODE
//1. Create an EventEmitter object directly
//2. create an object that extents event emmiter onject
//1
const EventEmitter = require("events")
//2
// class myEmitterObject extends EventEmitter{}

//Note eventEmitters are classes

// step 2 create an instance of the event emitter, one thing to note is that the event modules exposes EventEmitters as class
const instanceOfEventEmitter = new EventEmitter()

//event emitter class there fore exposes two objects 
//1. emit - this triggers an action, like it emits an action
//2. on - this provides a call back that runs after the action has been triggared

instanceOfEventEmitter.emit("My first emit project")
//note you need to pass the name of the event u need to emit as a string
//then event listeners now recorgnise the events fired by name, 
//if you emit an event, if there are subscribers it returns true else false

