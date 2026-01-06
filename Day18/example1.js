// Example of a Promise that calculates the area of a circle
function circle(radius){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(radius==0){
                reject("Invalid radius value")
            }else{
                let area = Math.PI * radius * radius;
                resolve(area);
            }
        })
    })
  
    return p;
}
function Main(){
    let pr = circle(0);
    pr.then(area => console.log("Area of circle :" + area))
    .catch(err => console.log("Error: " + err));
}

Main();
