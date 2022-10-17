const problem5 = (cars, year=2000) => {
    const cars_made_before_2000 = []
    for (let car_year of cars) {
        if (car_year < year) {
            cars_made_before_2000.push(car_year)
        }
    }
    return cars_made_before_2000
}

module.exports = problem5
