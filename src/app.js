//JavaScript is File Base Programming Language.
//Defined Variable, var, let(ES6), const(ES6)
//JavaScript is not type safe language. TypeScript is type safe programming language.
/*var number1 = 100
console.log(number1); //Output : 100

var number1 = 100
number1 = "Mahmut"
console.log(number1); //Output : Mahmut

var number1 = 100
var number1 = "Mahmut"
console.log(number1); //Output : Mahmut

let number1 = 100
let number1 = "Mahmut"
console.log(number1); //Output : Let variable does not allow duplicate. 
*/

/*
let number1 = 100
number1 = "Mahmut"
console.log(number1); //Output : Mahmut
*/

/*
let student = {id : 1, name : "Mahmut"} //Object Notation
console.log(student)
*/

/*
function save(stu) {
    console.log(stu)
}
save(); //Output : undefined
*/

/*
function save(stu) {
    console.log("test")
}
save(); //Output : test
*/

/*
function save(stu) {
    console.log(stu)
}
save(student); //Output : {id : 1, name : "Mahmut"}
*/

/*
function save(stu) {
    console.log(stu)
}
save(100); //Output : 100
*/

/*
function save(stu, point = 100) { //The default value is written in the last part of the parameter
    console.log(stu.name + " : " + point)
}
save(student); //Output : Mahmut : 100
*/

/*
function save(stu, point = 100) { //The default value is written in the last part of the parameter
    console.log(stu.name + " : " + point)
}
save(student, 1000); //Output : Mahmut : 1000
*/

/*
function save(point = 100, stu) { //The default value is written in the last part of the parameter
    console.log(stu.name + " : " + point)
}
save(undefined, student); //Output : Mahmut : 100
*/


let students1 = ["Mahmut Alan", "Name1 SName1", "Name2 SName2", "Name3 SName3", "Name4 SName4"]
console.log(students1)



let students2 = [student, {id : 1, name : "Mahmut"}, "Ankara", {city : "İstanbul"}]
console.log(students2)



