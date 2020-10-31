/*
* Javascript Linkedlist
* Add an element to Linkedlist
* Reverse a Linkedlist
* Find Middle Element of Linkedlist
* Print Linkedlist
*/
class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}
class linkedlist {
	constructor() {
		this.head = null;
		this.size = 0;
	}
}
linkedlist.prototype.add = function (element) {
	var node = new Node(element);
	var current;
	if (this.head === null) {
		this.head = node;
	} else {
		current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = node;
	}
	this.size++;
};
linkedlist.prototype.reverse = function (element) {
	var current = this.head;

	var next, prev;
	while (current != null) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	this.head = prev;
};
linkedlist.prototype.findMiddle = function (element) {
	var slowPointer = this.head;
	var fastPointer = this.head;
	if (this.head != null) {
		while (fastPointer !== null && fastPointer.next !== null) {
			slowPointer = slowPointer.next;
			fastPointer = fastPointer.next.next;
		}
		return slowPointer.element;
	}
};
linkedlist.prototype.printList = function (element) {
	var curr = this.head;
	var str = "";
	while (curr) {
		str += curr.element + " ";
		curr = curr.next;
	}
	return str;
};
var link = new linkedlist();
link.add(20);
link.add(30);
link.add(40);
link.add(50);
link.add(80);
link.add(60);
link.add(70);
link.add(83);
console.log("Print Linkedlist: ",link.printList());
console.log("Middle Element: ",link.findMiddle());
link.reverse();
console.log("Reversed Linkedlist: ",link.printList());
