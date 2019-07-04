function addNumber(...num){
    var sum=0;
    for(let data of num){
       // console.log(data);
        sum=sum+data;
    }
    console.log(sum);
    return sum;
}

var sumOfNumber=addNumber(10,20,30);
console.log(sumOfNumber);
