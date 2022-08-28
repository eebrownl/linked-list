
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    //print list
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }

    //insert at index
    insertAt(data, index) {
        if(index > 0 && index > this.size) {
            return
        }
        if(index === 0) {
            this.insertFirst(data);
            return
        }

        const node = new Node(data);
        let current, previous; 

        current = this.head; 
        let count = 0

        while(count < index) {
            previous = current;
            count++;
            current = current.next
        }

        node.next = current;
        previous.next = node;

        this.size++
    }

    //get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
         
        while(current) {
            if(count === index) {
                console.log(current.data)
            }
            count++
            current = current.next;
        }

        return null
    }

    //remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return
        }

        let current = this.head; 
        let previous;
        let count = 0; 

        if(index === 0) {
            this.head = current.next;
        }else {
            while(count < index) {
                count++
                previous = current;
                current = current.next;
            }

            previous.next = current.next
        }
        this.size--
    }

    //insert last node
    insertLast(data) {
        let node = new Node(data)
        let current; 

        //if empty, make it the head
        if(!this.head) {
            this.head = node
        }else {
            current = this.head;

            while(current.next) {
                current = current.next
            }

            current.next = node
        }

        this.size++
    }

    //clear list
    clearList() {
        this.head = null; 
        this.size = 0
    }
}

