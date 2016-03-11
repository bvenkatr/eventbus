# @nsisodiya/eventbus
Simple EventBus for Node.js

# Installation

```
npm install --save @nsisodiya/eventbus
```

# Usage

```js
import EventBus from '@nsisodiya/eventbus';


var b1 = new EventBus();

var unsub1 = b1.subscribe("ADD_EVENT", function (obj) {
	console.log("AddEvent Received at Section 1", obj);
});


var unsub2 = b1.subscribe("ADD_EVENT", function (obj) {
	console.log("AddEvent Received at Section 2", obj);
});


var unsub3 = b1.subscribeAll(function (obj, obj2) {
	console.log("Some Event Received at Section 3", obj, obj2);
});


b1.publish("ADD_EVENT", {done: false, title: "write JS"});
/*
AddEvent Received at Section 1 Object {done: false, title: "write JS"}
AddEvent Received at Section 2 Object {done: false, title: "write JS"}
Some Event Received at Section 3 ADD_EVENT Object {done: false, title: "write JS"}
*/

b1.publish("EDIT_EVENT", {done: false, title: "write JS"});
/*
Some Event Received at Section 3 EDIT_EVENT Object {done: false, title: "write JS"}
*/


unsub1();

b1.publish("ADD_EVENT", {done: false, title: "write JS"});
/*
AddEvent Received at Section 2 Object {done: false, title: "write JS"}
Some Event Received at Section 3 ADD_EVENT Object {done: false, title: "write JS"}
*/


unsub3();

b1.publish("EDIT_EVENT", {done: false, title: "write JS"});

/*
No Output and no one subscribe this event.
*/
```