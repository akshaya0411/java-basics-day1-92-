//largest of the three numbers using callback function
function displayLargest(num) {
    console.log("Largest number is: " + num);
} 
function largest(a, b, c, callback) {  
    if (a > b && a > c) {
        callback(a);
    } else if (b > a && b > c) {
        callback(b);
    } else {
        callback(c);
    }
}
function main() {
    largest(10, 20, 30, displayLargest);
}
main();
// Output:
// Largest number is: 30