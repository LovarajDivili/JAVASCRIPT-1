const inventory = require("./inventory.js")
const problem3 = require("./problem3.js")

const result3 = problem3(inventory)

let cars = result3.sort()
for (let i=0;i<cars.length;i++) {
    console.log(cars[i])
}
