//create an array of student objects with name, rollno, marks1, marks2, total
let students = [
    {name:"Sharmi", rollno:1, marks1:85, marks2:90,total:175},
    {name:"Akshaya", rollno:2, marks1:92, marks2:88,total:180},
    {name:"Varsha", rollno:3, marks1:75, marks2:80,total:155},
    {name:"Sowmya", rollno:4, marks1:89, marks2:94,total:183},
    {name:"Akshitha", rollno:5, marks1:80, marks2:85,total:165}
]
students = students.map(stud => {
    stud.total = stud.marks1 + stud.marks2;
    return stud;
});
console.log(students);
students.sort((s1, s2) => {
    return s2.total - s1.total;
});
console.log(students);
let result = students.filter(s=> s.total > 156);
console.log(result);
