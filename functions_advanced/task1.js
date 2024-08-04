function handleNum(number, onEvenNumber, onOddNumber) {
    if (Number.isInteger(number) && number % 2 === 0) {
        onEvenNumber()
        return
    }
    if (Number.isInteger(number) && number % 2 !== 0) {
        onOddNumber()
        return
    }
    console.log("only integer number can be odd or even")
}

function handleEven() {
    console.log("number is even")
}

function handleOdd() {
    console.log("number is odd")
}

handleNum(1, handleEven, handleOdd) //number is odd
handleNum(2, handleEven, handleOdd) //number is even
handleNum(3.5, handleEven, handleOdd) //only integer number can be odd or even