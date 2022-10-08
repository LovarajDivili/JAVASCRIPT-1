const problem5 = (cars) => {
    let year = 2000
    let cars_made_before_2000 = []
    for (let car_year of cars) {
        if (car_year < year) {
            cars_made_before_2000.push(car_year)
        }
    }
    return cars_made_before_2000
}

module.exports = problem5