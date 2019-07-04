function addNumber() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, num_1 = num; _a < num_1.length; _a++) {
        var data = num_1[_a];
        // console.log(data);
        sum = sum + data;
    }
    console.log(sum);
    return sum;
}
var sumOfNumber = addNumber(10, 20, 30);
console.log(sumOfNumber);
