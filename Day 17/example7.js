//promise function
function palindrome(str) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let reversed = str.split('').reverse().join('');
            resolve(reversed === str);
        }, 3000);
    });
}

function check(res) {
    if (res) console.log("The string is a palindrome.");
    else console.log("The string is not a palindrome.");
}

function main() {
    palindrome("Aka").then(check);
}
main(); // Example