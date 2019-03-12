/*Lazada is having a big sale.
Your task is to write the pseudo code logic for
calculating the final price of an item after GST, shipping and the different discounts have been applied.

Note: You don't have to worry about where a particular piece of data is coming from.
Any number or quantity mentioned can assumed to be assigned to a variable. This exercise is about logic.

Part 1: Shipping is flat rate $10 except for people buying bulky items, or if it is being shipped to east coast.
(both of these are a $10 extra fee)

When you buy over $40 of stuff, shipping is free.

Shipping is also taxed.

Any sofa is %10 off and free shipping.

Part 2: iPhones come with a discount voucher of $20 off your entire purchase.

Part 3: When you buy any nike product, you get a 15% discount (this special discount is inclusive of GST)

Part 4: Current members of the Lazada frequent buyers club get an extra %5 off any clothing up to $50 in discounts.

Part 5: When paying with Visa your order is tax free.

Part 6: Change the pseudo code so that only the first 2 applicable discounts can be combined.
*/

var shippingCost = 10
console.log(shippingCost);

var car = {
  wheels: 4,
  doors: 2,
  seats: 5
};
for (i in car) {
  console.log("my car has "+car[i]+" "+i);
}

var i = 0;
while (i < 1000) {
  console.log("i is " + i);
  i++;
}

// Will print out:
// >i is 0
// >i is 1
// >i is 2
// >i is 3
// >i is 4

for (var i = 0; i < 5; i++) {
  console.log("i is " + i);
}

// Will _also_ print out:
// >i is 0
// >i is 1
// >i is 2
// >i is 3
// >i is 4
var a = [6,5,4,3];

for (var i = a.length - 1; i >= 0; i--) {
  console.log(a[i]);
}

for (var j = 0; j < Math.floor(Math.random() * 101); j=j+2) {
  console.log("j is " + j);
}
