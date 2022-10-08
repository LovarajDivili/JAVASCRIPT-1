const problem6 = (inventory) => {
    let cars_with_BMW_Audi = []

    for (let i=0;i<inventory.length;i++){
        if ((inventory[i].car_make === "BMW") || (inventory[i].car_make === "Audi")) {
            cars_with_BMW_Audi.push(inventory[i])
        }
    }
    return cars_with_BMW_Audi
}

module.exports = problem6