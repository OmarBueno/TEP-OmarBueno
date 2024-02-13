class Node {
    constructor(valor, siguiente = null) {
        this.valor = valor;
        this.siguiente = siguiente;
    }
}

// Ejemplo de uso:
const nodo1 = new Node(5);
const nodo2 = new Node(10);
nodo1.siguiente = nodo2;

console.log(nodo1.valor); // Output: 5
console.log(nodo1.siguiente.valor); // Output: 10
