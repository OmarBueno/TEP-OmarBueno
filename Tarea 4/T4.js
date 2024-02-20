class Cords {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function getFirstAndFourthQuadrantPoints(points) {
    return points.filter(point => (point.x > 0 && point.y > 0) || (point.x < 0 && point.y > 0));
}

function fillRandomPoints(n) {
    let points = [];
    for (let i = 0; i < n; i++) {
        const randomX = Math.floor(Math.random() * 21) - 10;
        const randomY = Math.floor(Math.random() * 21) - 10;
        const point = new Cords(randomX, randomY);
        points.push(point);
    }
    return points;
}

const points = fillRandomPoints(10);
console.log(points);
console.log(getFirstAndFourthQuadrantPoints(points));
