function countToZeroRecursion(num) {
    console.log(num)
    if(num > 0) {
        countToZeroRecursion(num - 1)
        }
}

countToZeroRecursion(5)