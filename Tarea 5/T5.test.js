const Cords = require("./T5.js").Cords;
const getDistanceToOrigin = require("./T5.js").getDistanceToOrigin;
const fillRandomPoints = require("./T5.js").fillRandomPoints;
const getKClosestPoints = require("./T5.js").getKClosestPoints;

describe("Cords class", () => {
    test("Constructor crea punto correctamente", () => {
        const point = new Cords(5, 10);
        expect(point.x).toBe(5);
        expect(point.y).toBe(10);
    });
});

describe("getDistanceToOrigin", () => {
    test("Calcula la distancia correctamente", () => {
        const point = new Cords(3, 4);
        const distance = getDistanceToOrigin(point);
        expect(distance).toBe(5);
    });
});

describe("fillRandomPoints", () => {
    test("Genera un array de puntos", () => {
        const points = fillRandomPoints(5);
        expect(points.length).toBe(5);
        expect(points[0]).toBeInstanceOf(Cords); // Verificar que son instancias de Cords
    });
});

describe("getKClosestPoints", () => {
    test("Funciona con puntos de ejemplo", () => {
        const points = [new Cords(1, 1), new Cords(5, 3), new Cords(3, 2)];
        const closestPoints = getKClosestPoints(points, 2);
        expect(closestPoints.length).toBe(2);
        expect(closestPoints).toContainEqual(points[0]); // El punto mas cercano (1, 1)
        expect(closestPoints).toContainEqual(points[1]); // El segundo punto mas cercano (3, 2)
    });

    test("Maneja casos extremos (k >= points.length)", () => {
        const points = [new Cords(1, 1), new Cords(5, 3)];
        const closestPoints = getKClosestPoints(points, 3);
        expect(closestPoints).toEqual([]); // Debería devolver todos los puntos
    });
});
