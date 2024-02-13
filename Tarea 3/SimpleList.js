class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SimpleList {
    constructor(head = null, tail = null) {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.size++;
            this.tail = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;
        this.tail = newNode;
    }

    addAfter(value, after) {
        const newNode = new Node(value);
        let current = this.head;
        while (current) {
            if (current.value === after) {
                newNode.next = current.next;
                current.next = newNode;
                this.size++;
                return;
            }
            current = current.next;
        }
    }

    addBefore(value, before) {
        const newNode = new Node(value);
        let current = this.head;
        while (current) {
            if (current.next.value === before) {
                newNode.next = current.next;
                current.next = newNode;
                this.size++;
                return;
            }
            current = current.next;
        }
    }

    // removeAfter(value, after) {
    //     let current = this.head;
    //     while (current) {
    //         if (current.value === after) {
    //             current.next = current.next.next;
    //             this.size--;
    //             return;
    //         }
    //         current = current.next;
    //     }
    // }

    // removeBefore(value, before) {
    //     let current = this.head;
    //     while (current) {
    //         if (current.next.next.value === before) {
    //             current.next = current.next.next;
    //             this.size--;
    //             return;
    //         }
    //         current = current.next;
    //     }
    // }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    size() {
        return this.size;
    }
}

const lista = new SimpleList();
lista.add(5);
lista.add(10);
lista.add(15);
lista.print();
console.log("-------------------");
lista.addAfter(12, 10);
lista.print();
console.log("-------------------");
lista.addBefore(7, 10);
lista.print();
