function findSum(a,b){
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            const sum = a + b;
            resolve(sum);
        }, 2000);
    });
    return p;
}
function main() {
    const a = 10;
    const b = 21;

    findSum(a, b)
        .then(sum => {
            console.log("Sum of numbers:", sum);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
main();