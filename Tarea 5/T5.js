class Cords {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function getDistanceToOrigin(point) {
    return Math.sqrt(point.x ** 2 + point.y ** 2);
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

function getKClosestPointsFor(points, k) {
    points.forEach((point) => (point.distance = getDistanceToOrigin(point)));
    console.log(points);
    points.sort((a, b) => a.distance - b.distance);
    console.log(points);
}

/* Using For eeach and sort
function getKClosestPoints(points, k) {
    return points
        .sort((a, b) => getDistanceToOrigin(a) - getDistanceToOrigin(b))
        .slice(0, k);
}*/

// Make directly
function getKClosestPoints(points, k) {
    if (k > points.length) return [];
    return points
        .sort((a, b) => getDistanceToOrigin(a) - getDistanceToOrigin(b))
        .slice(0, k);
}

module.exports = { Cords, getDistanceToOrigin, fillRandomPoints, getKClosestPoints };

// const points = fillRandomPoints(10);
// console.log(points);
// console.log("getKClosestPoints");
// console.log(getKClosestPoints(points, 4));
