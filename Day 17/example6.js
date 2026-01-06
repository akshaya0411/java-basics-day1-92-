function palindrome(str,callback){
    setTimeout(() => {
        let reversed = str.split('').reverse().join('')
        
        let res = reversed== str;
        callback(res);
},3000);
}   
function check(res){
    if(res) console.log("The string is a palindrome.");
    else console.log("The string is not a palindrome.");

}
function main(){
    palindrome("racecar", check);
}
main(); // Example