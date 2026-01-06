function searchElement(arr, searchData, callback) {
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === searchData) {
                callback(null, i); // Element found, return index
                return;
            }
        }
        callback(new Error("Element not found")); // Element not found
    }, 5000);
}
function main() {
    const arr = [1, 2, 3, 4, 5];
    const elementToFind = 3;

    searchElement(arr, elementToFind, (error, index) => {
        if (error) {
            console.error(error.message);
        } else {
            console.log(`Element found at index: ${index}`);
        }
    });
}
main(); // Example