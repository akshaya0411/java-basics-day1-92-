function SimpleIntrest() {
    let P  = parseInt(document.getElementById("P").value);
    let tm = parseInt(document.getElementById("tm").value);
    let rt = parseInt(document.getElementById("rt").value);
    let result = document.getElementById("result");
    let res = (P + tm + rt);
    result.innerHTML="SimpleIntrest : "+res;
}