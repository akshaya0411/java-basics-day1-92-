//write a program to find a area of circle using function
function areaOfCircle(radius) {
    if (radius <= 0) {
        return "Radius must be a positive number.";
    }
    const area = Math.PI * radius * radius;
    return area;
}

// Example usage:
console.log(areaOfCircle(5)); // Output: 78.53981633974483
