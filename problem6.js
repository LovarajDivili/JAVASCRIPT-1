const problem6 = (inventory,arrayWithRequiredCarMake) => {
    const cars_with_BMW_Audi = []
    for (let i=0;i<inventory.length;i++){
        for (let requiredCarMake of arrayWithRequiredCarMake) {
            if ((inventory[i].car_make === requiredCarMake)) {
                cars_with_BMW_Audi.push(inventory[i])
            }
        }
    }
    return cars_with_BMW_Audi
}

module.exports = problem6
