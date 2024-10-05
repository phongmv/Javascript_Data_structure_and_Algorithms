// Step 1: Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Step 2: LinkedList class
class LinkedList {
    constructor() {
        this.head = null;  // Head of the list
    }

    // Insert a new node at the end
    insert(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Delete a node by its value
    delete(value) {
        if (!this.head) {
            return;  // If the list is empty, do nothing
        }

        // If the node to be deleted is the head
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;

        // Find the node to delete
        while (current !== null && current.value !== value) {
            previous = current;
            current = current.next;
        }

        // If node is found, adjust pointers
        if (current !== null) {
            previous.next = current.next;
        }
    }

    // Traverse the list and print all values
    traverse() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);

console.log("Linked List:");
list.traverse();  // Outputs: 10 20 30

list.delete(20);
console.log("After deleting 20:");
list.traverse();  // Outputs: 10 30
