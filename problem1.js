const problem1 = (inventory, id=33) => {
    for (let i=0;i< inventory.length;i++){
        if (inventory[i].id === id) {
            return inventory[i]
        }
    }
}


module.exports = problem1
