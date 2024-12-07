let product = [{name:"Laptop",price:9000},{name:"Mouse",price:40},{name:"Keyboard",price:500}];

let processProducts = product.map(item => item.name);

console.log(processProducts);

product.forEach((_, index) => {
    let item = product[index];
    console.log(item.price >50 ? `${item.name} is above $50` : `${item.name} is below $50`);
    });