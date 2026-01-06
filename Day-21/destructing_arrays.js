nos = [10,20,30,40];

first_no = nos[0];
second_no = nos[1];

console.log("Regular approach");
console.log(first_no, second_no);

console.log("Array destructuring approach");
console.log("first and second");
[first_no, second_no]=nos;
console.log(first_no, second_no);

console.log("first and second");
[a, b] = nos;
console.log("a= ",a, ", b= ", b);

[a, , b] = nos;
console.log("a= ",a, ", b= ", b);

[a, , , b] = nos;
console.log("a= ",a, ", b= ", b);