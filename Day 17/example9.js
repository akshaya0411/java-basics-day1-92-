//write asychornous function to find sum of all array elements
async function findSum(arr,callback) {
    setTimeout(() => {
        const sum = arr.reduce((acc, num) => acc + num, 0);
        callback(null, sum); 
    }, 2000);
}
function main() {
    const arr = [10, 21, 32, 43, 54];
    
    findSum(arr, (error, sum) => {
        if (error) {
            console.error("Error:", error);
        } else {
            console.log("Sum of array elements:", sum);
        }
    });
}
main(); 
