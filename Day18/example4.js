//largest of three numbers using promises
function largestOfThree(a, b, c) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a>b && a>c)
                resolve(a);
            else if (b > c)
                resolve(b);
            else
                resolve(c);
            // Simulating asynchronous operation
        }, 1000);
    })
}
function Main() {
    largestOfThree(10, 20, 30)
        .then(largest => console.log("Largest number is: " + largest))
        .catch(err => console.log("Error: " + err.message));
}
Main();