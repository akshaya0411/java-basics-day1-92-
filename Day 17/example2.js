function displayFact(fact){
    console.log("Factorial :"+fact);

}
function findFactorial(n, callback){
    console.log("Starting to find factorial");
    setTimeout(function(){
        console.log("Started processing of factorial function...");
        let f = 1;
        for(let i = 1; i <= n; i++){
            f =f* i;
        }
        callback(f);
    }, 10000);
    console.log("End of findFactorial function");
}
function Main(){
    console.log("Starting main function");
    let n = 5;
    findFactorial(n, displayFact);
    console.log("End of main function");
}
Main();