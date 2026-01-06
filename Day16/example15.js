let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(data => {
    let isPrime = true;
    if (data < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(data); i++) {
            if (data % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(data);
    }
});
// Output: 2, 3, 5, 7