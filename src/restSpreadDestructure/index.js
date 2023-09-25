//Rest : Write the rest like <...products> Also ...products structure creats an array 
let showProducts = function (id, ...products) { //Variables can assign functions.
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts) 
console.log(100, "Apple, Pear, Watermelon")
console.log(100, ["Apple, Pear, Watermelon"]) //Array in array

//Spread
let points = [1, 10, 20, 30, 40, 50]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG", "H")

//Destructuring : Shred. It matches values with variables.
let populations = [1000, 2000, 3000, [4000, 5000]]
let [small, medium, high, [veryHigh, max]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(max)

function someFunction([small1], number) {
console.log(small1)    
}

someFunction(populations)

let category = {id : 1, name : "Drink"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name)


