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

    addEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.size++;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    /*Error si no encuentra el valor, se debe generar una excepción, Si se agrega despues de tail debe ser actualzado*/
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

    /*Error si no encuentra el valor, se debe generar una excepción y considerar agregar antes del head*/
    addBefore(value, before) {
        const newNode = new Node(value);
        let current = this.head;
        console.log(current);
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

    /*Error si no encuentra el valor, se debe generar una excepción, Si se elimina el tail debe ser actualizado*/
    removeAfter(after) {
        let current = this.head;
        while (current) {
            if (current.value === after) {
                current.next = current.next.next;
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    /*Error si no encuentra el valor, se debe generar una excepción, Si se elimina el head debe ser actualizado*/
    removeBefore(before) {
        let current = this.head;
        while (current) {
            if (current.next.next.value === before) {
                current.next = current.next.next;
                this.size--;
                return;
            }
            current = current.next;
        }
    }

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
console.log("--------ADD AFTER-----------");
lista.addAfter(12, 10);
lista.print();
console.log("--------ADD BEFORE-----------");
lista.addBefore(7, 10);
lista.print();
console.log("--------REMOVE AFTER-----------");
lista.removeAfter(10);
lista.print();
console.log("-------REMOVE BEFORE------------");
lista.removeBefore(10);
lista.print();
console.log("-------ADD END O(N)------------");
lista.addEnd(20);
lista.print();

// console.log("Errors");
// // lista.removeAfter(15);
// // lista.removeBefore(5);
// lista.addBefore(1, 5);
// lista.print();
