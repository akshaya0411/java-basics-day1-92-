let arr = [
    {empNo:101,name:"Akshaya",salary:30000},
    {empNo:102,name:"Varsha",salary:440000},
    {empNo:103,name:"Akshitha",salary:660000},
    {empNo:104,name:"Sowmya",salary:220000},
    {empNo:105,name:"sharmi",salary:370000}
]
//incresing salary by 10% using forEach
/*arr.forEach(function(emp){  
    emp.salary = emp.salary + (emp.salary * 0.10);
});
//displaying the updated array
console.log(arr);*/
/*arr = arr.map(e=>{
    e.salary = e.salary + (e.salary * 0.10);
    return e;
});
//displaying the updated array
console.log(arr);*/
//using map display only names
/*(arr = arr.map(e=>e.name);
//displaying the updated array 
console.log(arr);
let data = arr.join("-")
console.log(data);*/
/*function salarycompare(e1,e2){
    if(e1.salary > e2.salary){ return 1;
    }
    else if(e1.salary < e2.salary) {   return -1;
     }
      else{
          return 0;
      }

}
arr.sort(salarycompare)
console.log(arr);*/
let comparesalary = (e1,e2) => {
    return e1.salary - e2.salary
}
arr.sort(comparesalary)
console.log(arr)
//create 5 student record with name, rollno, marks1, marks2, marks3
let students = [
    {name:"Sharmi", rollno:1, marks1:85, marks2:90, marks3:78},
    {name:"Akshaya", rollno:2, marks1:92, marks2:88, marks3:95},
    {name:"Varsha", rollno:3, marks1:75, marks2:80, marks3:70},
    {name:"Sowmya", rollno:4, marks1:89, marks2:94, marks3:91},
    {name:"Akshitha", rollno:5, marks1:80, marks2:85, marks3:82}
]   
//displaying the student records
console.log(students);

