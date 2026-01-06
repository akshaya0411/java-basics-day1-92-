function displaySum(sm){
    console.log("The sum is: " + sm);
}
function findsum(a,b,callback){
    console.log("starting to find sum");
    setTimeout(function(){
        console.log("Started processing of add function...")
    callback(a+b);
},5000
);
console.log("End of findsum function");
}
function main(){
    console.log("Starting main function");
    let s = findsum(10,20,displaySum);
    console.log("End of main function");
}
main();