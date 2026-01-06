//write a asynchronous function to find the sum of two numbers
function sumOfTwoDigits(sm) {
    console.log("The sum is: " + sm);
}
function findSum(a, b, callback) {
    console.log("Starting to find sum");
    setTimeout(function() {
        console.log("Started processing of add function...");
        callback(a + b);
    }, 5000);
    console.log("End of findSum function");
}
function main() {
    console.log("Starting main function");
    findSum(10, 20, sumOfTwoDigits);
    console.log("End of main function");
}
main();