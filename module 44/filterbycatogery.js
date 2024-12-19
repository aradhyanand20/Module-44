// Write a function that takes an array of products and returns a function that filters the array by a given product
// category. The function must filter an eCommerce products array by a specific category. The closure filters
// products using the filter() method. Finally, it returns a new array containing only the products with the same
// category as the input.

function filterBycategory(products){
    return function(category){
        return products.filter(product=>product.category===category);
    }
}
  const products = [ { name: "Laptop", category: "Electronics" }, 
    { name: "Shirt", category: "Clothing" }, 
    { name: "Phone", category: "Electronics" }, 
    { name: "Pants", category: "Clothing" },
    { name: "Headphones", category: "Electronics" } ];

    let eCommerce = filterBycategory(products);
    console.log(eCommerce('Electronics'));
    console.log(eCommerce('Clothing'));
    