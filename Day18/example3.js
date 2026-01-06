//perfect number or not
function isPerfectNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num < 1) {
                reject("Invalid input");
            } else {
                let sum = 0;
                for (let i = 1; i < num/2; i++) {
                    if (num % i === 0) {
                        sum += i;
                    }
                }
                if (sum === num) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        }, 2000);
    });
}

function Main() {
    let p = isPerfectNumber(30);
    p.then(result => {
        if (result) {
            console.log("30 is a perfect number");
        } else {
            console.log("30 is not a perfect number");
        }
    })
    .catch(err => console.log("Error: " + err));
}
Main();