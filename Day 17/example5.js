//palindrome  function using callback 
function palindrome(str,callback){
    setTimeout(() => {
        let reversed = 0;
        let original = str;
        while(str != 0){
            reversed = reversed * 10 + str % 10;
            str = Math.floor(str / 10);
        }
        callback(original === reversed);
    }, 10000);
}
function main(data){
    console.log("Starting main function");
    palindrome(data, function(result) {
        console.log("The number is " + (result ? "a palindrome." : "not a palindrome."));
    });
    console.log("End of main function");
}
main(121); 