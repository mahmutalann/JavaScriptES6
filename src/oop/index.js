class Customer{ //When values are assigned, it uses a prototyping structure.
    constructor(id, customerNumber){
        //Prototyping
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "123");

//Prototyping to Instance : Adding an attribute to object
customer.name = "Mahmut"
console.log(customer.name)

//Prototyping to Class
Customer.test = "Test"
console.log(Customer.test)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(id, customerNumber, firstName){
    super(id, customerNumber)
    this.firstName = firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(id, customerNumber, companyName){
    super(id, customerNumber)
    this.companyName = companyName
    }
}


let products = [
    {id:1, name : "A Laptop", unitPrice:15000},
    {id:2, name : "B Laptop", unitPrice:16000},
    {id:3, name : "C Laptop", unitPrice:13000},
    {id:4, name : "D Laptop", unitPrice:12000},
    {id:5, name : "E Laptop", unitPrice:17000},
]

//It is like for loop. 
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

 products.map(product=>{
     console.log(product)
     console.log(`<li>${product.name}</li>`)
})

//It filters as an array. If it does not have data, it runs empty array.
let filteredProducts = products.filter(product=>product.unitPrice>12000)
console.log(filteredProducts)

//It totals the price of products.
let cartTotal = products.reduce((acc, product)=>acc+ product.unitPrice, 0)
console.log(cartTotal)


let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2)
