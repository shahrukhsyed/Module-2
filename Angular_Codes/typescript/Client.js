"use strict";
exports.__esModule = true;
var prods = [
    { productId: 101, productName: "Lays", productPrice: 10.00 },
];
prods.push({ productId: 102, productName: "Kit-kat", productPrice: 30.00 });
prods.push({ productId: 103, productName: "Pepsi", productPrice: 60.00 });
prods.push({ productId: 104, productName: "Burger", productPrice: 50.00 });
console.log(prods);
prods.splice(2, 1);
for (var _i = 0, prods_1 = prods; _i < prods_1.length; _i++) {
    var data = prods_1[_i];
    console.log(data.productId + " " + data.productName + " " + data.productPrice);
}
//
var profind = prods.filter(function (prod1) { return prod1.productId == 102; });
console.log(profind);
