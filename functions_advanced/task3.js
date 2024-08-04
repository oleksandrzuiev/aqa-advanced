function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator can't be zero")
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") { //it's better to use typeof since isNaN allows to string like "123" 
        throw new Error("Please specify number for numerator and denominator")
    }
    return numerator / denominator
}

//will return the result of dividing
try {
    console.log(divide(15, 5))
} catch(e) {
    console.log(e.message)
} finally {
    console.log("Operation is completed")
}

//will return "Denominator can't be zero" error message
try {
    console.log(divide(15, 0))
} catch(e) {
    console.log(e.message)
} finally {
    console.log("Operation is completed")
}

//will return "Please specify number for numerator and denominator" error message
try {
    console.log(divide(15, "test"))
} catch(e) {
    console.log(e.message)
} finally {
    console.log("Operation is completed")
}