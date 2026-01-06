//largest of two numbers using callback function
function displayLargest(num) {
    console.log("Largest number is: " + num);
}
function largest(a, b, callback) {  
    if (a > b) {
        callback(a);
    } else {
        callback(b);
    }
}     

function main() {
    largest(10, 20, displayLargest);
   
}
main();
// Output:
// Largest number is: 20   
