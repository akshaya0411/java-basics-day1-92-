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
async function Main() {
    console.log("Waiting for the result from async function");
    let pr = await largestOfThree(3,15,6);
    console.log("Largest : "+pr)
}
Main();