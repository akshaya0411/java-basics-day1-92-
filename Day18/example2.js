//write a program to find volume of a box by writing 
function volume(length, width, height) {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            if(length == 0 || width == 0 || height == 0) {
                reject("Invalid dimensions");
            }else{
                    let volume = length * width * height;
                       resolve(volume);
                }
        }, 2000);
    });
    return promise;
}
function Main(){
    let p = volume(2,3,4);
    p.then(vol => console.log("Volume of box :" + vol))
     .catch(err => console.log("Error: " + err));
}
Main();