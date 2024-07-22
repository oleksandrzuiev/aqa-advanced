//Function declaration
function calculateRectangleArea1(width, height) {
    return width * height
}
console.log("Rectangle area calculated by using function declaration is:", calculateRectangleArea1(5, 10))

//Function expression
const calculateRectangleArea2 = function (width, height) {
    return width * height
}
console.log("Rectangle area calculated by using function expression is:", calculateRectangleArea2(5, 10))

//Arrow function
const calculateRectangleArea3 = (width, height) => {
    return width * height
}
console.log("Rectangle area calculated by using arrow function is:", calculateRectangleArea3(5, 10))