let problem3 = (inventory) => {
    let cars = []
    for (let i=0;i<inventory.length;i++) {
        cars.push(inventory[i].car_model)
    }
    cars.sort()
    let sortedInventory = []
    for (let car_name of cars) {
        for (let car of inventory) {
            if (car.car_model === car_name) {
                sortedInventory.push(car)
            }
        }
    }
    return sortedInventory
}

module.exports = problem3
