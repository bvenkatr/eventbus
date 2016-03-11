import EventBus from '@nsisodiya/eventbus';


var b1 = new EventBus();

console.log("SubScribe ADD_EVENT, Section 1");
var unsub1 = b1.subscribe("ADD_EVENT", function (obj) {
	console.log("AddEvent Received at Section 1", obj);
});

console.log("SubScribe ADD_EVENT, Section 2");
var unsub2 = b1.subscribe("ADD_EVENT", function (obj) {
	console.log("AddEvent Received at Section 2", obj);
});


console.log("SubScribe All Events, Section 3");
var unsub3 = b1.subscribeAll(function (obj, obj2) {
	console.log("Some Event Received at Section 3", obj, obj2);
});

console.log("Publish ADD_EVENT");
b1.publish("ADD_EVENT", {done: false, title: "write JS"});
console.log("Publish EDIT_EVENT");
b1.publish("EDIT_EVENT", {done: false, title: "write JS"});


console.log("UNSubScribe ADD_EVENT, Section 1");
unsub1();

console.log("Publish ADD_EVENT");
b1.publish("ADD_EVENT", {done: false, title: "write JS"});


console.log("UNSubScribe Section 3");
unsub3();

console.log("Publish EDIT_EVENT");
b1.publish("EDIT_EVENT", {done: false, title: "write JS"});
