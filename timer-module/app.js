/*
Timer functions in Node.js behave similarly to how they work in front-end JavaScript programs, 
but the difference is that they are added to the Node.js event loop
This means that the timer functions are scheduled and put into a queue. 
This queue is processed at every iteration of the event loop. 
If a timer function is executed outside of a module, the behavior will be random (non-deterministic).

The main advantage to using setImmediate() over setTimeout() is 
setImmediate() will always be executed before any timers if scheduled within an I/O cycle, 
independently of how many timers are present.
*/