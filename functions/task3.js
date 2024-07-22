function checkOrder(available, ordered) {
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods."
    }
    if (ordered === 0) {
        return "Your order is empty"
    }
    if (available >= ordered) {
        return "Your order is accepted"
    }
    return "Your order is invalid" //this message returns if required parameters are missing
}
console.log(checkOrder(9, 8))