// Function to calculate the area of a parallelogram based on the height
function areaHeight(base, height) {
  return base * height;
}

// Function to calculate the area of a parallelogram based on two sides and an angle
function areaSidesAndAngle(side1, side2, angle) {
  return side1 * side2 * Math.sin(angle);
}

// Example usage
let base = 5;
let height = 7;
let side1 = 3;
let side2 = 4;
let angle = Math.PI / 4;

let area1 = areaHeight(base, height);
console.log(`The area of the parallelogram is ${area1} based on the height.`);

let area2 = areaSidesAndAngle(side1, side2, angle);
console.log(`The area of the parallelogram is ${area2} based on the sides and angle.`);
