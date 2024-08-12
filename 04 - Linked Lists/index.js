
const log = (...args) => console.log(...args);

class Node {
    constructor(value) {
        log("new Node with tail -> null: " + value);
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        log("push : " + value);
        let newNode = new Node(value);

        if (!this.head) {
            log("List is Empty");
            this.head = newNode;
            this.tail = newNode;
        } else {
            log("Not Empty");
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


}


function test() {
    let myLinkedList = new LinkedList("A");
    log("myLinkedList.push('B');");
    myLinkedList.push("B");
    myLinkedList.push("C");
    // myLinkedList.makeEmpty();
    // myLinkedList.push(2);


    // myLinkedList.getHead();
    // myLinkedList.getTail();
    // myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();
