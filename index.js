let product = [{name:"Laptop",price:9000},{name:"Mouse",price:40},{name:"Keyboard",price:500}];

let processProducts = product.map(productNames => product.name);

console.log(processProducts);

processProducts.forEach(productNames => product.price>50? 'product.name is above $50':'product.name is below $50')