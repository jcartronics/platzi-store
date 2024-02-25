/**
 * 
 *  This function calculates the total price of all products in the cart
 * @param {Array} products cartProduct: Array of objects
 * @returns {Number} sum of all products prices
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}