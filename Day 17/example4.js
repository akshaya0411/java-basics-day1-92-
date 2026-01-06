function sumOfTwoDigits(data,callback){
    setTimeout(() => {
        let sum = 0;
        while(data != 0){
            sum += data % 10;
            data = Math.floor(data / 10);
        }
        callback(sum);
    }, 10000);
}
function main(data){
    console.log("Starting main function");
    sumOfTwoDigits(data, function(result) {
        console.log("The sum of digits is: " + result);
    });
    console.log("End of main function");
}
main(12345); // Example input