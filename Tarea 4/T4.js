class Cords {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function getFirstAndFourthQuadrantPoints(points) {
    let firstAndFourthQuadrantPoints = [];
    for (let i = 0; i < points.length; i++) {
        if (
            (points[i].x > 0 && points[i].y > 0) ||
            (points[i].x < 0 && points[i].y > 0)
        ) {
            firstAndFourthQuadrantPoints.push(points[i]);
        }
    }
    return firstAndFourthQuadrantPoints;
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
