import {IProduct} from './Product';
var prods:IProduct[]=[
    {productId:101,productName:"Lays",productPrice:10.00},
    ];
prods.push( {productId:102,productName:"Kit-kat",productPrice:30.00});
prods.push( {productId:103,productName:"Pepsi",productPrice:60.00});
prods.push( {productId:104,productName:"Burger",productPrice:50.00});
console.log(prods);
prods.splice(2,1);
for(let data of prods){
    console.log(data.productId+" "+data.productName+" "+data.productPrice);  
}
//
let profind=prods.filter(prod1=>prod1.productId==102);
console.log(profind);