let problem3 = (inventory) => {
    let cars = []
    for (let i=0;i<inventory.length;i++) {
        cars.push(inventory[i].car_model)
    }
    return cars
}

module.exports = problem3