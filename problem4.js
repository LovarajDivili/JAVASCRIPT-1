const problem4 = (inventory) => {
    const cars = []
    for (let i=0;i<inventory.length;i++) {
        cars.push(inventory[i].car_year)
    }
    return cars
}

module.exports = problem4
